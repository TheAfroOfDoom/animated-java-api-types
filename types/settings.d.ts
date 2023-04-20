import type { Subscribable } from './subscribable'
declare global {
	namespace AnimatedJava {
		interface IInfoPopup {
			type: 'warning' | 'error' | 'info'
			title: string
			lines: string[]
		}

		type SettingID = `${string}${string}:${string}${string}/${string}${string}`

		interface ISettingOptions<V> {
			/**
			 * The id of the setting.
			 * The id should be in the format of `namespace:interface/setting_name`.
			 * This should be unique across all plugins and interfaces!
			 */
			id: SettingID
			displayName: string
			/**
			 * A list of paragraphs to display in the description of the setting.
			 */
			description: string[]
			/**
			 * The default value of the setting.
			 */
			defaultValue: V
			/**
			 * Whether or not the setting can be reset to its default value.
			 */
			resettable?: boolean
			/**
			 * A link to the docs page/section for this setting.
			 */
			docsLink?: string
			/**
			 * A list of settings that this setting depends on.
			 * If any of the settings in this list update, this setting will also update.
			 */
			dependsOn?: AnimatedJava.SettingID[]
		}

		type ISettingsObject = Record<string, Setting<any>>
	}
}

export class Setting<V, R = any> extends Subscribable<R> {
	static registeredSettings: Map<string, Setting<any>>

	constructor(
		options: AnimatedJava.ISettingOptions<V>,
		onUpdate?: (setting: R) => void,
		onInit?: (setting: R) => void
	)

	public onUpdate?: (setting: R) => void
	public onInit?: (setting: R) => void

	id: AnimatedJava.SettingID
	displayName: string
	description: string[]
	defaultValue: V
	resettable?: boolean
	docsLink?: string
	dependsOn?: AnimatedJava.SettingID[]

	value: V

	verify(): AnimatedJava.IInfoPopup | undefined

	private _initialized: boolean
	protected _value: V
	private lastValue: V
	infoPopup?: AnimatedJava.IInfoPopup
}

export class CheckboxSetting extends Setting<boolean, CheckboxSetting> {
	constructor(
		options: AnimatedJava.ISettingOptions<boolean>,
		onUpdate?: (setting: CheckboxSetting) => void,
		onInit?: (setting: CheckboxSetting) => void
	)
	onUpdate?: (setting: CheckboxSetting) => void
	onInit?: (setting: CheckboxSetting) => void
}
export class InlineTextSetting extends Setting<string, InlineTextSetting> {
	constructor(
		options: AnimatedJava.ISettingOptions<string>,
		onUpdate?: (setting: InlineTextSetting) => void,
		onInit?: (setting: InlineTextSetting) => void
	)
	onUpdate?: (setting: InlineTextSetting) => void
	onInit?: (setting: InlineTextSetting) => void
}
export class CodeboxSetting extends Setting<string, CodeboxSetting> {
	language: string
	constructor(
		options: AnimatedJava.ISettingOptions<string> & { language: string },
		onUpdate?: (setting: CodeboxSetting) => void,
		onInit?: (setting: CodeboxSetting) => void
	)
	onUpdate?: (setting: CodeboxSetting) => void
	onInit?: (setting: CodeboxSetting) => void
}
export class FolderSetting extends Setting<string, FolderSetting> {
	constructor(
		options: AnimatedJava.ISettingOptions<string>,
		onUpdate?: (setting: FolderSetting) => void,
		onInit?: (setting: FolderSetting) => void
	)
	onUpdate?: (setting: FolderSetting) => void
	onInit?: (setting: FolderSetting) => void
}
export class FileSetting extends Setting<string, FileSetting> {
	constructor(
		options: AnimatedJava.ISettingOptions<string>,
		onUpdate?: (setting: FileSetting) => void,
		onInit?: (setting: FileSetting) => void
	)
	onUpdate?: (setting: FileSetting) => void
	onInit?: (setting: FileSetting) => void
}
export class NumberSetting extends Setting<number, NumberSetting> {
	min?: number
	max?: number
	step?: number
	snap?: boolean
	constructor(
		options: AnimatedJava.ISettingOptions<number> & {
			min?: number
			max?: number
			step?: number
			snap?: boolean
		},
		onUpdate?: (setting: NumberSetting) => void,
		onInit?: (setting: NumberSetting) => void
	)
	onUpdate?: (setting: NumberSetting) => void
	onInit?: (setting: NumberSetting) => void
}

export class DoubleNumberSetting extends Setting<[number, number], DoubleNumberSetting> {
	min?: number
	max?: number
	step?: number
	snap?: boolean
	firstNumberLabel?: string
	secondNumberLabel?: string

	constructor(
		options: AnimatedJava.ISettingOptions<[number, number]> & {
			min?: number
			max?: number
			step?: number
			snap?: boolean
			firstNumberLabel?: string
			secondNumberLabel?: string
		},
		onUpdate?: (setting: DoubleNumberSetting) => void,
		onInit?: (setting: DoubleNumberSetting) => void
	)

	get numberA(): number
	set numberA(value: number)

	get numberB(): number
	set numberB(value: number)
	_onUpdate(forced: boolean): void
}

export class DropdownSetting<V = any, K extends number = number> extends Setting<
	K,
	DropdownSetting<V, K>
> {
	options: Array<{ name: string; value: V }>
	constructor(
		options: AnimatedJava.ISettingOptions<K> & {
			options: DropdownSetting<V, K>['options']
		},
		onUpdate?: (setting: DropdownSetting<V, K>) => void,
		onInit?: (setting: DropdownSetting<V, K>) => void
	)
	onUpdate?: (setting: DropdownSetting<V, K>) => void
	onInit?: (setting: DropdownSetting<V, K>) => void

	get selected(): DropdownSetting<V, K>['options'][any] | undefined
}

export class ImageDropdownSetting extends DropdownSetting<Texture['uuid']> {
	constructor(
		options: AnimatedJava.ISettingOptions<number> & {
			options: ImageDropdownSetting['options']
		},
		onUpdate?: (setting: ImageDropdownSetting) => void,
		onInit?: (setting: ImageDropdownSetting) => void
	)
	onUpdate?: (setting: ImageDropdownSetting) => void
	onInit?: (setting: ImageDropdownSetting) => void

	getSelectedTexture(): Texture | undefined
}

export interface IAnimatedJavaSettings {
	default_exporter: DropdownSetting<string>
}

export function createInfo(
	type: 'error' | 'warning' | 'info',
	info: string,
	formatObject?: Record<string, string> | string[]
): AnimatedJava.IInfoPopup
