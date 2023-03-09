import type { IRenderedAnimation } from './animationRenderer'
import type { GUIStructure } from './guiStructure'
import type { IRenderedRig } from './modelRenderer'
import type { IAnimatedJavaProjectSettings } from './projectSettings'
import type { IAnimatedJavaSettings, Setting } from './settings'

type NamespacedString = `${string}${string}:${string}${string}`
type ProjectSettings = Record<NamespacedString, Setting<any>>

interface IAnimatedJavaExporterOptions<S extends ProjectSettings> {
	id: NamespacedString
	name: string
	description: string
	getSettings(): S
	settingsStructure: GUIStructure
	onStartup?: () => void
	export(
		ajSettings: IAnimatedJavaSettings,
		projectSettings: IAnimatedJavaProjectSettings,
		exporterSettings: S,
		renderedAnimations: IRenderedAnimation[],
		rig: IRenderedRig
	): Promise<void> | void
}

export class AnimatedJavaExporter<
	S extends ProjectSettings = Record<NamespacedString, Setting<any>>
> {
	static all: AnimatedJavaExporter[]
	constructor(options: IAnimatedJavaExporterOptions<S>)
	id: NamespacedString
	name: string
	description: string
	getSettings: IAnimatedJavaExporterOptions<S>['getSettings']
	settingsStructure: GUIStructure
	onStartup?: IAnimatedJavaExporterOptions<S>['onStartup']
	export: IAnimatedJavaExporterOptions<S>['export']
}
