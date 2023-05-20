import { ProgressBarController } from './util/progressBarController'

declare class VirtualNode {
	constructor(name: string, parent?: VirtualNode)
	public name: string
	public parent?: VirtualNode
	/**
	 * The path to this folder, relative to the root of the virtual file system
	 */
	get path(): string

	accessParent(): VirtualFolder | undefined
}

export class VirtualFolder extends VirtualNode {
	childCount: number
	children: Array<VirtualFolder | VirtualFile>

	protected addChild()

	constructor(name: string, parent?: VirtualFolder, ignoreInvalidName?: boolean)

	/**
	 * Create a new file in this folder
	 * @param name The name of the file to create. If the name contains slashes, the parent folders will be created recursively.
	 * @param content The content of the file. If content is an Array of strings each string will be treated as a new line in the file.
	 * @returns The created VirtualFile, or throws if it already exists
	 */
	newFile(
		name: string,
		content: VirtualFileContent,
		customJsonMerger?: (
			oldContent: VirtualFileContent,
			newContent: VirtualFileContent
		) => VirtualFileContent
	): VirtualFile | never

	/**
	 * Create a new folder (or folders) in this folder
	 * @param name The name of the folder to create. If the name contains slashes, the parent folders will be created recursively.
	 * @returns The created folder, or throws if it already exists
	 */
	newFolder(name: string, existsOk?: boolean): VirtualFolder | never

	/**
	 * Create multiple new folders in this folder
	 * @param names The names of the folders to create. If the name contains slashes, the parent folders will be created recursively.
	 * @returns The created folders, or throws if any of them already exist
	 */
	newFolders(...names: string[]): VirtualFolder[] | never

	/**
	 * Create a new file in this folder, and return the parent folder
	 * @param name The name of the file to create. If the name contains slashes, the parent folders will be created recursively.
	 * @param content The content of the file. If content is an Array of strings each string will be treated as a new line in the file.
	 * @returns The folder this function was called on
	 */
	chainNewFile(
		name: string,
		content: VirtualFileContent,
		customJsonMerger?: (
			oldContent: VirtualFileContent,
			newContent: VirtualFileContent
		) => VirtualFileContent
	): VirtualFolder | never

	/**
	 * Create a new file in this folder, and return the parent folder
	 * @param name The name of the file to create. If the name contains slashes, the parent folders will be created recursively.
	 * @returns The folder this function was called on
	 */
	chainNewFolder(name: string, existsOk?: boolean): VirtualFolder | never

	/**
	 * Access a child folder of this folder by path
	 * @param path The path to the child, relative to this folder
	 * @returns The child, or throws if it doesn't exist
	 */
	accessFolder(path: string): VirtualFolder | never

	/**
	 * Access a child file of this folder by path
	 * @param path The path to the child, relative to this folder
	 * @returns The child, or throws if it doesn't exist
	 */
	accessFile(path: string): VirtualFile | never

	getAllFilePaths(): string[]

	writeToDisk(outputFolder: string, progress?: ProgressBarController): Promise<void>
}

type VirtualFileContent = string | Buffer | Uint8Array | string[] | any
export class VirtualFile extends VirtualNode {
	constructor(
		fileName: string,
		parent: VirtualFolder,
		content: VirtualFileContent,
		customJsonMerger?: (
			oldContent: VirtualFileContent,
			newContent: VirtualFileContent
		) => VirtualFileContent
	)
	public ext: string
	public fileName: string
	public parent: VirtualFolder
	public content: VirtualFileContent
	public customJsonMerger?: (
		oldContent: VirtualFileContent,
		newContent: VirtualFileContent
	) => VirtualFileContent

	writeToDisk(outputFolder: string, progress?: ProgressBarController): Promise<void>
}
