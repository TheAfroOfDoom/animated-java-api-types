declare global {
	namespace AnimatedJava {
		export interface ITreeLeaf<T> {
			type: 'leaf'
			scoreIndex: number
			item: T
		}

		export interface ITreeBranch<T> {
			type: 'branch'
			items?: Array<ITreeBranch<T> | ITreeLeaf<T>>
			minScoreIndex: number
			maxScoreIndex: number
		}
	}
}

export function generateSearchTree<T>(
	items: T[]
): AnimatedJava.ITreeBranch<T> | AnimatedJava.ITreeLeaf<T>
