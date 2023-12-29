/// <reference path="./animationRenderer.d.ts" />
/// <reference path="./modelRenderer.d.ts" />
/// <reference path="./guiStructure.d.ts" />
/// <reference path="./global.d.ts" />

import type { AnimatedJavaExporter, TSafeExportProject } from './animatedJavaExporter'
import type { generateSearchTree, JsonText } from './minecraft'
import type { createInfo, Setting } from './settings'
import type { addTranslations, translate } from './translation'
import type { ExpectedError, formatStr, LimitClock, roundTo, roundToN } from './util'
import type { ProgressBarController } from './util/progressBarController'
import './variants'
import type * as VFS from './virtualFileSystem'
import './projectSettings'

declare global {
	namespace AnimatedJava {
		export const loaded: boolean
		export function docClick(link: string): void
		export const events: typeof import('./events')

		export class VirtualFile extends VFS.VirtualFile {}
		export class VirtualFolder extends VFS.VirtualFolder {}

		export const API: {
			addTranslations: typeof addTranslations
			AJMetaFile: typeof import('./ajmeta').AJMetaFile
			createInfo: typeof createInfo
			deepslate: typeof import('deepslate')
			ExpectedError: typeof ExpectedError
			Exporter: typeof AnimatedJavaExporter
			formatStr: typeof formatStr
			generateSearchTree: typeof generateSearchTree
			JsonText: typeof JsonText
			LimitClock: typeof LimitClock
			minecraft: typeof import('./minecraft')
			ProgressBarController: typeof ProgressBarController
			roundTo: typeof roundTo
			roundToN: typeof roundToN
            safeExportProject: TSafeExportProject
			Settings: typeof import('./settings')
			translate: typeof translate
			VirtualFileSystem: typeof import('./virtualFileSystem')
		}
	}

	//-------------------------------
	// Blockbench Type modifications
	//-------------------------------

	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface _Animation {
		affected_bones: Array<{ name: string; value: string }>
		affected_bones_is_a_whitelist: boolean
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
		animated_java_variants?: AnimatedJava.VariantsContainer
		animated_java_uuid?: string
	}
}
