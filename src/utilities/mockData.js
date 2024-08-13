export const explorer = {
    id: '1',
    name: 'root',
    isFolder: true,
    parentId: null,
    items: [
        {
            id: '2',
            name: 'folder1',
            isFolder: true,
            parentId: '1',
            items: []
        },
        {
            id: '3',
            name: 'folder2',
            isFolder: true,
            parentId: '1',
            items: [
                {
                    id: '4',
                    name: 'file1',
                    isFolder: false,
                    parentId: '3',
                    items: []
                },
                {
                    id: '5',
                    name: 'file2',
                    isFolder: false,
                    parentId: '3',
                    items: []
                }
            ]
        }
    ]
}