import type { IAnimatedJavaSettings, Setting } from './settings'

declare global {
	namespace AnimatedJava {
		type NamespacedString = `${string}${string}:${string}${string}`
		export interface IAnimatedJavaExportData<ExporterSettings> {
			ajSettings: IAnimatedJavaSettings
			projectSettings: AnimatedJava.IProjectSettings
			exporterSettings: ExporterSettings
			renderedAnimations: AnimatedJava.IRenderedAnimation[]
			rig: AnimatedJava.IRenderedRig
		}
	}
}

type ExporterSettingsObj = Record<string, Setting<any>>
export interface IAnimatedJavaExporterOptions<ExporterSettings extends ExporterSettingsObj> {
	id: AnimatedJava.NamespacedString
	name: string
	description: string
	getSettings(): ExporterSettings
	settingsStructure: AnimatedJava.GUIStructure
	onStartup?: () => void
	export(exportData: AnimatedJava.IAnimatedJavaExportData<ExporterSettings>): Promise<void> | void
}

export class AnimatedJavaExporter<ExporterSettings extends ExporterSettingsObj> {
	static all: AnimatedJavaExporter<any>[]
	constructor(options: IAnimatedJavaExporterOptions<ExporterSettings>)
	id: AnimatedJava.NamespacedString
	name: string
	description: string
	getSettings: IAnimatedJavaExporterOptions<ExporterSettings>['getSettings']
	settingsStructure: AnimatedJava.GUIStructure
	onStartup?: IAnimatedJavaExporterOptions<ExporterSettings>['onStartup']
	export: IAnimatedJavaExporterOptions<ExporterSettings>['export']
}
