export interface IAJMetaJSON {
	version?: string
	projects: Record<string, IAJMetaProject>
}

export interface IAJMetaProject {
	project_name: string
	file_list: string[]
}

export class AJMetaFile {
	version: string
	projects: Record<string, IAJMetaProject>

	constructor()

	addProject(uuid: string, projectName: string, fileList: string[]): IAJMetaProject
	getProject(uuid: string): IAJMetaProject | undefined
	toJSON(): IAJMetaJSON
	load(path: string): Promise<AJMetaFile>
}
