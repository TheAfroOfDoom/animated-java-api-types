/// <reference path="./animationRenderer.d.ts" />
/// <reference path="./modelRenderer.d.ts" />
/// <reference path="./guiStructure.d.ts" />
/// <reference path="./global.d.ts" />

import type { AnimatedJavaExporter } from './animatedJavaExporter'
import type { generateSearchTree, JsonText } from './minecraft'
import type { createInfo, Setting } from './settings'
import type { addTranslations, translate } from './translation'
import type { formatStr, roundTo, roundToN } from './util'
import type { ProgressBarController } from './util/progressBarController'
import type { VariantsContainer } from './variants'
import type * as VFS from './virtualFileSystem'

declare global {
	namespace AnimatedJava {
		export const loaded: boolean
		export function docClick(link: string): void
		export const events: typeof import('./events')

		export class VirtualFile extends VFS.VirtualFile {}
		export class VirtualFolder extends VFS.VirtualFolder {}

		export const API: {
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

	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface _Animation {
		affectedBones: Array<{ name: string; value: string }>
		affectedBonesIsAWhitelist: boolean
	}

	interface AnimationOptions {
		affected_bones?: Array<{ name: string; value: string }>
		affected_bones_is_a_whitelist?: boolean
	}

	interface AnimationUndoCopy {
		affected_bones: Array<{ name: string; value: string }>
		affected_bones_is_a_whitelist: boolean
	}

	interface Cube {
		forceVisible?: boolean
	}

	interface Group {
		nbt?: string
	}

	interface ModelProject {
		animated_java_settings?: AnimatedJava.IProjectSettings
		animated_java_exporter_settings?: Record<string, Record<string, Setting<any>>>
		animated_java_variants?: VariantsContainer
	}
}
