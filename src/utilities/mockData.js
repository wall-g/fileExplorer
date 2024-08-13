export const explorer = {
    id: '1',
    name: 'root',
    isFolder: true,
    items: [
        {
            id: '2',
            name: 'folder1',
            isFolder: true,
            items: []
        },
        {
            id: '3',
            name: 'folder2',
            isFolder: true,
            items: [
                {
                    id: '4',
                    name: 'file1',
                    isFolder: false,
                    items: []
                },
                {
                    id: '5',
                    name: 'file2',
                    isFolder: false,
                    items: []
                }
            ]
        }
    ]
}