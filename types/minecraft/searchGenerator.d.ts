interface ITreeLeaf<T> {
	type: 'leaf'
	scoreIndex: number
	item: T
}

interface ITreeBranch<T> {
	type: 'branch'
	items?: Array<ITreeBranch<T> | ITreeLeaf<T>>
	minScoreIndex: number
	maxScoreIndex: number
}

export function generateSearchTree<T>(items: T[]): ITreeBranch<T> | ITreeLeaf<T>
