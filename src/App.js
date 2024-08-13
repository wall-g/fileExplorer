import react, { useState } from 'react'
import ReactDom from 'react-dom/client'
import Folder from './components/Folder'
import { explorer } from './utilities/mockData'
import useTreeTraversal from './hooks/use-tree-traversal'

const App = () => {
    const [fileTree, setFileTree] = useState(explorer);
    const {insertNode, deleteNode} = useTreeTraversal();
    const handleInsertNode = (parentId, name, isFolder) => {
        insertNode(parentId, name, fileTree, isFolder);
        setFileTree(fileTree);
    }
    const handleDeleteNode = (id, parentId) => {
        const updatedTree  = deleteNode(id, fileTree, parentId);
        setFileTree(updatedTree);
    }

    return (
        <Folder fileTree={fileTree} handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode}/>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>)
