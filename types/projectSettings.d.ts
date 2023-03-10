import type * as Settings from './settings'

declare global {
	namespace AnimatedJava {
		export interface IProjectSettings {
			project_namespace: Settings.InlineTextSetting
			rig_item: Settings.InlineTextSetting
			rig_item_model: Settings.InlineTextSetting
			rig_export_folder: Settings.FolderSetting
			enable_advanced_resource_pack_settings: Settings.CheckboxSetting
			resource_pack_folder: Settings.FileSetting
			verbose: Settings.CheckboxSetting
			exporter: Settings.DropdownSetting<string>
		}
	}
}
