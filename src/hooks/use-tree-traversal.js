const useTreeTraversal = () => {

    //function to add file or folder to a folder
    function insertNode(parentId, name, tree, isFolder) {
        if (parentId === tree.id && tree.isFolder) {
            const item = {
                id: new Date().getTime(),
                name: name,
                isFolder: isFolder,
                items: []
            }
            tree.items.unshift(item);
        }
        tree.items.forEach((node) => insertNode(parentId, name, node, isFolder));
    }
    return { insertNode };
}

export default useTreeTraversal;