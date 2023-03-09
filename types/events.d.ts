import { Subscribable } from './subscribable'

export class PluginEvent<T = void> extends Subscribable<T> {
	protected static events: Record<string, PluginEvent<any>>
	constructor(name: string)
	public name: string
}

export const LOAD: PluginEvent
export const UNLOAD: PluginEvent
export const INSTALL: PluginEvent
export const UNINSTALL: PluginEvent

export const INJECT_MODS: PluginEvent
export const EXTRACT_MODS: PluginEvent

export const LOAD_PROJECT: PluginEvent
export const PRE_SELECT_PROJECT: PluginEvent<ModelProject>
export const SELECT_PROJECT: PluginEvent<ModelProject>
export const POST_SELECT_PROJECT: PluginEvent<ModelProject>

export const UNSELECT_PROJECT: PluginEvent
export const UPDATE_SELECTION: PluginEvent
export const VARIANT_PROPERTIES_UPDATE: PluginEvent

type Link = { link: string; section?: string }
export const DOCS_LINK_CLICKED: PluginEvent<Link>
