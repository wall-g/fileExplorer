const useTreeTraversal = () => {

    //function to add file or folder to a folder
    function insertNode(parentId, name, tree, isFolder) {
        if (parentId === tree.id && tree.isFolder) {
            const item = {
                id: new Date().getTime(),
                name: name,
                isFolder: isFolder,
                parentId: parentId,
                items: []
            }
            tree.items.unshift(item);
        }
        tree.items.forEach((node) => insertNode(parentId, name, node, isFolder));
    }

    //function to delete a file or folder inside a folder 
    function deleteNode(id, tree, parentId) { 
        if(parentId === tree.id) {
            return {...tree, items: tree.items.filter((item) => item.id != id)};
        }
        const updatedItems = tree.items.map((el) => deleteNode(id, el, parentId));
        return {...tree, items: updatedItems};
    }

    return { insertNode, deleteNode };
}

export default useTreeTraversal;