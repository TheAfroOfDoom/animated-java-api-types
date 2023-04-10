import type { IAnimatedJavaSettings, Setting } from './settings'

declare global {
	namespace AnimatedJava {
		type NamespacedString = `${string}${string}:${string}${string}`
		type ProjectSettings = Record<NamespacedString, Setting<any>>
		export interface IAnimatedJavaExportData<S> {
			ajSettings: IAnimatedJavaSettings
			projectSettings: AnimatedJava.IProjectSettings
			exporterSettings: S
			renderedAnimations: AnimatedJava.IRenderedAnimation[]
			rig: AnimatedJava.IRenderedRig
		}
	}
}

export interface IAnimatedJavaExporterOptions<S extends AnimatedJava.ProjectSettings> {
	id: AnimatedJava.NamespacedString
	name: string
	description: string
	getSettings(): S
	settingsStructure: AnimatedJava.GUIStructure
	onStartup?: () => void
	export(exportData: AnimatedJava.IAnimatedJavaExportData<S>): Promise<void> | void
}

export class AnimatedJavaExporter<
	S extends AnimatedJava.ProjectSettings = Record<AnimatedJava.NamespacedString, Setting<any>>
> {
	static all: AnimatedJavaExporter[]
	constructor(options: IAnimatedJavaExporterOptions<S>)
	id: AnimatedJava.NamespacedString
	name: string
	description: string
	getSettings: IAnimatedJavaExporterOptions<S>['getSettings']
	settingsStructure: AnimatedJava.GUIStructure
	onStartup?: IAnimatedJavaExporterOptions<S>['onStartup']
	export: IAnimatedJavaExporterOptions<S>['export']
}
