import './global'
import type { AnimatedJavaExporter } from './animatedJavaExporter'
import type { generateSearchTree, JsonText } from './minecraft'
import type { IAnimatedJavaProjectSettings } from './projectSettings'
import type { createInfo, Setting } from './settings'
import type { addTranslations, translate } from './translation'
import type { formatStr, roundTo, roundToN } from './util'
import type { ProgressBarController } from './util/progressBarController'
import type { VariantsContainer } from './variants'

declare global {
	const AnimatedJava: {
		loaded?: boolean
		docClick: (link: string) => void
		events: typeof import('./events')

		API: {
			Exporter: typeof AnimatedJavaExporter
			Settings: typeof import('./settings')
			translate: typeof translate
			addTranslations: typeof addTranslations
			formatStr: typeof formatStr
			roundTo: typeof roundTo
			roundToN: typeof roundToN
			VirtualFileSystem: typeof import('./virtualFileSystem')
			deepslate: typeof import('deepslate')
			ProgressBarController: typeof ProgressBarController
			createInfo: typeof createInfo
			JsonText: typeof JsonText
			generateSearchTree: typeof generateSearchTree
		}
	}

	//-------------------------------
	// Blockbench Type modifications
	//-------------------------------

	interface Cube {
		forceVisible?: boolean
		_forceVisible?: boolean
	}

	interface ModelProject {
		animated_java_settings?: IAnimatedJavaProjectSettings
		animated_java_exporter_settings?: Record<
			string,
			Record<string, Setting<any>>
		>
		animated_java_variants?: VariantsContainer
	}
}