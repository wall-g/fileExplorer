import { useState } from "react"

const Folder = ({ fileTree, handleInsertNode, handleDeleteNode, handleUpdateNode }) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({ visible: false, isFolder: false, isUpdate: false });
    const handleNewFolder = (isFolder, isUpdate) => {
        setShowInput({ visible: true, isFolder: isFolder, isUpdate: isUpdate });
    }
    const handleInput = (e, isFolder, parentId, isUpdate) => {
        if (e.key === 'Enter') {
            if (isUpdate) {
                handleUpdateNode(parentId, e.target.value);
            } else {
                handleInsertNode(parentId, e.target.value, isFolder);
                setExpand(true);
            }
            setShowInput({ visible: false, isFolder: false, isUpdate: false });
        }
    }
    const handleDelete = (id, parentId) => {
        handleDeleteNode(id, parentId);
        setExpand(true);
        setShowInput({ visible: false, isFolder: false, isUpdate: false });
    }

    if (fileTree.isFolder) {
        return (
            <>
                <div style={{ display: "flex" }}>
                    <div onClick={() => setExpand(!expand)} style={{ cursor: "pointer", marginTop: 8 }}>
                        🗂️ {fileTree.name}
                    </div>
                    <button style={{ marginLeft: 8, marginTop: 8 }} onClick={() => handleNewFolder(true, false)}>+ Add Folder</button>
                    <button style={{ marginLeft: 8, marginTop: 8 }} onClick={() => handleNewFolder(false, false)}>+ Add File</button>
                    <button style={{ marginLeft: 8, marginTop: 8, display: fileTree.id === '1' ? "none" : "block" }} onClick={() => handleDelete(fileTree.id, fileTree.parentId)}>Delete</button>
                    <button style={{ marginLeft: 8, marginTop: 8 }} onClick={() => handleNewFolder(false, true)}>Rename</button>
                </div>
                {
                    showInput.visible && <div style={{ marginTop: 8 }}>
                        <span style={{ marginTop: 15, marginRight: 8 }}>{showInput.isFolder ? '🗂️': !showInput.isUpdate? '📃': ''}</span>
                        <input autoFocus onKeyDown={(e) => handleInput(e, showInput.isFolder, fileTree.id, showInput.isUpdate)} onBlur={() => setShowInput({ ...showInput, visible: false })} />
                    </div>
                }

                {
                    expand && <div style={{ paddingLeft: 25 }}>
                        {fileTree.items.map((exp) => <Folder key={exp.id} fileTree={exp} handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} handleUpdateNode={handleUpdateNode} />)}
                    </div>
                }

            </>
        )
    }

    return (
        <>
            <div className="file" style={{ marginTop: 8, display: 'flex' }}>
                <div>
                    📃 {fileTree.name}
                </div>
                <button style={{ marginLeft: 8 }} onClick={() => handleDelete(fileTree.id, fileTree.parentId)}>Delete</button>
                <button style={{ marginLeft: 8 }} onClick={() => handleNewFolder(false, true)}>Rename</button>
            </div>
            {
                showInput.isUpdate && <div style={{ marginTop: 8 }}>
                    <input autoFocus onKeyDown={(e) => handleInput(e, showInput.isFolder, fileTree.id, showInput.isUpdate)} onBlur={() => setShowInput({ ...showInput, visible: false })} />
                </div>
            }
        </>
    )
}

export default Folder