import react, { useState } from 'react'
import ReactDom from 'react-dom/client'
import Folder from './components/Folder'
import { explorer } from './utilities/mockData'
import useTreeTraversal from './hooks/use-tree-traversal'

const App = () => {
    const [fileTree, setFileTree] = useState(explorer);
    const {insertNode} = useTreeTraversal();
    const handleInsertNode = (parentId, name, isFolder) => {
        insertNode(parentId, name, fileTree, isFolder);
        setFileTree(fileTree);
    }

    return (
        <Folder fileTree={fileTree} handleInsertNode={handleInsertNode}/>
    )
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>)
