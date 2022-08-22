import * as fs from "fs";
import path from "path";

const shade0 = "#282c34";
const shade1 = "#40444b";
const shade2 = "#585c62";
const shade3 = "#707479";
const shade4 = "#898b8f";
const shade5 = "#a1a3a6";
const shade6 = "#b9bbbd";
const shade7 = "#d1d3d4";

const zRed = "#eb3047"; // accent0
const zOrange = "#eb5630"; // accent1
const zYellow = "#e0d66c"; // accent2
const zGreen = "#4fe070"; // accent3
const zCyan = "#43bfb3"; // accent4
const zBlueAlt = "#4f59e0"; // accent5
const zPurpleAlt = "#776af8"; // accent6
const zPink = "#eb30d5"; // accent7
const zBlue = "#263451";
const zPurple = "#604C9D";

const shadow = shade0;

// Modified from https://github.com/themerdev/themer/blob/main/cli/packages/vscode/lib/index.js
const json = JSON.stringify(
  {
    name: "ZBRA Dark",
    type: "dark",
    colors: {
      // See this page for a reference of available theme colors:
      // https://code.visualstudio.com/api/references/theme-color

      // Base colors
      "focusBorder": zPurpleAlt,
      "foreground": shade7,
      // Omitted: disabledForeground
      "widget.shadow": shadow,
      "selection.background": shade2,
      "descriptionForeground": shade6,
      "errorForeground": zRed,
      "icon.foreground": shade6,
      "sash.hoverBorder": zBlueAlt,

      // Window border
      // Omitted: window.activeBorder
      // Omitted: window.inactiveBorder

      // Text colors
      "textBlockQuote.background": shade1,
      "textBlockQuote.border": shade1,
      "textCodeBlock.background": shade0,
      "textLink.activeForeground": zCyan,
      "textLink.foreground": zBlueAlt,
      "textPreformat.foreground": zOrange,
      "textSeparator.foreground": shade4,

      // Button control
      "button.background": zBlueAlt,
      "button.foreground": shade0,
      // Omitted: button.border
      // Omitted: button.separator
      "button.hoverBackground": zCyan,
      "button.secondaryForeground": shade0,
      "button.secondaryBackground": shade6,
      "button.secondaryHoverBackground": shade5,
      "checkbox.background": zBlueAlt,
      "checkbox.foreground": shade0,
      "checkbox.border": shade1,

      // Dropdown control
      "dropdown.background": shade1,
      "dropdown.listBackground": shade1,
      "dropdown.border": shade1,
      "dropdown.foreground": shade6,

      // Input control
      "input.background": shade1,
      "input.border": shade1,
      "input.foreground": shade6,
      "input.placeholderForeground": shade2,
      "inputOption.activeBackground": shade2,
      "inputOption.activeBorder": zCyan,
      "inputOption.activeForeground": shade7,
      // Omitted: inputOption.hoverBackground
      "inputValidation.errorBackground": shade1,
      "inputValidation.errorForeground": zRed,
      "inputValidation.errorBorder": zRed,
      "inputValidation.infoBackground": shade1,
      "inputValidation.infoForeground": zBlueAlt,
      "inputValidation.infoBorder": zBlueAlt,
      "inputValidation.warningBackground": shade1,
      "inputValidation.warningForeground": zOrange,
      "inputValidation.warningBorder": zOrange,

      // Scroll bar control
      "scrollbar.shadow": shadow,
      "scrollbarSlider.activeBackground": `${shade5}7f`,
      "scrollbarSlider.background": `${shade3}7f`,
      "scrollbarSlider.hoverBackground": `${shade4}7f`,

      // Badge
      "badge.foreground": shade0,
      "badge.background": zPurpleAlt,

      // Progress bar
      "progressBar.background": zGreen,

      // Lists and trees
      "list.activeSelectionBackground": `${zPurpleAlt}33`,
      "list.activeSelectionForeground": shade7,
      // Omitted: "list.activeSelectionIconForeground"
      "list.dropBackground": shade1,
      "list.focusBackground": `${shade3}3f`,
      "list.focusForeground": shade7,
      // Omitted: "list.focusHighlightForeground"
      // Omitted: "list.focusOutline"
      // Omitted: "list.focusAndSelectionOutline"
      "list.highlightForeground": zYellow,
      "list.hoverBackground": `${shade1}33`,
      "list.hoverForeground": shade7,
      "list.inactiveSelectionBackground": `${shade2}3f`,
      "list.inactiveSelectionForeground": shade6,
      // Omitted: "list.inactiveSelectionIconForeground"
      "list.inactiveFocusBackground": `${shade1}3f`,
      // Omitted: "list.inactiveFocusOutline"
      "list.invalidItemForeground": zRed,
      "list.errorForeground": zRed,
      "list.warningForeground": zYellow,
      "listFilterWidget.background": shade1,
      "listFilterWidget.outline": zBlueAlt,
      "listFilterWidget.noMatchesOutline": zRed,
      "list.filterMatchBackground": `${zYellow}33`,
      "list.filterMatchBorder": `${zYellow}33`,
      "list.deemphasizedForeground": shade4,
      "tree.indentGuidesStroke": shade1,
      // Omitted: "tree.tableColumnsBorder"
      // Omitted: "tree.tableOddRowsBackground"

      // Activity bar
      "activityBar.background": zBlue,
      "activityBar.dropBorder": zBlueAlt,
      "activityBar.foreground": shade2,
      "activityBar.inactiveForeground": shade4,
      "activityBar.border": shade0,
      "activityBarBadge.background": zOrange,
      "activityBarBadge.foreground": shade0,
      "activityBar.activeBorder": zBlue,
      "activityBar.activeBackground": zGreen,
      "activityBar.activeFocusBorder": zPurpleAlt,

      // Side bar
      "sideBar.background": shade0,
      "sideBar.foreground": shade6,
      "sideBar.border": shade1,
      "sideBar.dropBackground": `${shade1}3f`,
      "sideBarTitle.foreground": shade5,
      "sideBarSectionHeader.background": shade2,
      "sideBarSectionHeader.foreground": shade6,
      "sideBarSectionHeader.border": shade0,

      // Minimap
      "minimap.findMatchHighlight": zYellow,
      "minimap.selectionHighlight": `${zBlueAlt}80`,
      "minimap.errorHighlight": `${zRed}80`,
      "minimap.warningHighlight": `${zOrange}80`,
      "minimap.background": shade0,
      // Omitted: "minimap.selectionOccurrenceHighlight"
      // Omitted: "minimap.foregroundOpacity"
      "minimapSlider.background": `${shade1}33`,
      "minimapSlider.hoverBackground": `${shade2}33`,
      "minimapSlider.activeBackground": `${shade3}33`,
      "minimapGutter.addedBackground": `${zGreen}80`,
      "minimapGutter.modifiedBackground": `${zYellow}80`,
      "minimapGutter.deletedBackground": `${zRed}80`,

      // Editor groups & tabs
      "editorGroup.border": shade1,
      "editorGroup.dropBackground": `${shade2}7f`,
      "editorGroupHeader.noTabsBackground": shade0,
      "editorGroupHeader.tabsBackground": shade0,
      "editorGroupHeader.tabsBorder": shade0,
      "editorGroupHeader.border": shade0,
      "editorGroup.emptyBackground": shade0,
      "editorGroup.focusedEmptyBorder": shade1,
      // Omitted: editorGroup.dropIntoPromptForeground
      // Omitted: editorGroup.dropIntoPromptBackground
      // Omitted: editorGroup.dropIntoPromptBorder
      "tab.activeBackground": shade0,
      "tab.unfocusedActiveBackground": shade0,
      "tab.activeForeground": shade6,
      "tab.border": shade0,
      // Omitted: tab.activeBorder
      // Omitted: tab.unfocusedActiveBorder
      // Omitted: tab.activeBorderTop
      // Omitted: tab.unfocusedActiveBorderTop
      "tab.lastPinnedBorder": zPink,
      "tab.inactiveBackground": shade1,
      "tab.unfocusedInactiveBackground": shade1,
      "tab.inactiveForeground": shade3,
      "tab.unfocusedActiveForeground": shade3,
      "tab.unfocusedInactiveForeground": shade2,
      "tab.hoverBackground": `${shade1}80`,
      "tab.unfocusedHoverBackground": `${shade1}80`,
      "tab.hoverForeground": shade5,
      "tab.unfocusedHoverForeground": shade4,
      // Omitted: tab.hoverBorder
      // Omitted: tab.unfocusedHoverBorder
      "tab.activeModifiedBorder": zYellow,
      "tab.inactiveModifiedBorder": zYellow,
      "tab.unfocusedActiveModifiedBorder": zYellow,
      "tab.unfocusedInactiveModifiedBorder": zYellow,
      "editorPane.background": shade0,
      // Omitted: sideBySideEditor.horizontalBorder
      // Omitted: sideBySideEditor.verticalBorder

      // Editor colors
      "editor.background": shade0,
      "editor.foreground": shade7,
      "editorLineNumber.foreground": shade2,
      "editorLineNumber.activeForeground": shade4,
      "editorCursor.background": shade0,
      "editorCursor.foreground": zPurpleAlt,
      "editor.selectionBackground": `${zBlueAlt}33`,
      "editor.selectionForeground": shade7,
      "editor.inactiveSelectionBackground": `${zBlueAlt}33`,
      "editor.selectionHighlightBackground": shade1,
      // Omitted: editor.selectionHighlightBorder
      "editor.wordHighlightBackground": `${zPurpleAlt}33`,
      // Omitted: editor.wordHighlightBorder
      "editor.wordHighlightStrongBackground": `${zPink}33`,
      // Omitted: editor.wordHighlightStrongBorder
      "editor.findMatchBackground": `${zYellow}3f`,
      "editor.findMatchHighlightBackground": `${zYellow}33`,
      "editor.findRangeHighlightBackground": shade1,
      // Omitted: editor.findMatchBorder
      // Omitted: editor.findMatchHighlightBorder
      // Omitted: editor.findRangeHighlightBorder
      // Omitted: searchEditor.findMatchBackground
      // Omitted: searchEditor.findMatchBorder
      // Omitted: searchEditor.textInputBorder
      "editor.hoverHighlightBackground": `${shade2}7f`,
      "editor.lineHighlightBackground": shade0,
      "editor.lineHighlightBorder": shade1,
      // Omitted: editorUnicodeHighlight.border
      // Omitted: editorUnicodeHighlight.background
      "editorLink.activeForeground": zCyan,
      "editor.rangeHighlightBackground": `${zYellow}33`,
      // Omitted: editor.rangeHighlightBorder
      "editor.symbolHighlightBackground": `${zPurpleAlt}33`,
      // Omitted: editor.symbolHighlightBorder
      "editorWhitespace.foreground": shade1,
      "editorIndentGuide.background": shade1,
      "editorIndentGuide.activeBackground": shade2,
      // Omitted: editorInlayHint.background
      // Omitted: editorInlayHint.foreground
      // Omitted: editorInlayHint.typeForeground
      // Omitted: editorInlayHint.typeBackground
      // Omitted: editorInlayHint.parameterForeground
      // Omitted: editorInlayHint.parameterBackground
      "editorRuler.foreground": shade1,
      // Omitted: editor.linkedEditingBackground
      "editorCodeLens.foreground": shade5,
      "editorLightBulb.foreground": zYellow,
      "editorLightBulbAutoFix.foreground": zBlueAlt,
      "editorBracketMatch.background": shade1,
      "editorBracketMatch.border": shade2,
      "editorBracketHighlight.foreground1": shade7,
      "editorBracketHighlight.foreground2": zYellow,
      "editorBracketHighlight.foreground3": zCyan,
      "editorBracketHighlight.foreground4": zPurpleAlt,
      "editorBracketHighlight.foreground5": zGreen,
      "editorBracketHighlight.foreground6": zBlueAlt,
      "editorBracketHighlight.unexpectedBracket.foreground": zRed,
      // Omitted: editorBracketPairGuide.activeBackground1
      // Omitted: editorBracketPairGuide.activeBackground2
      // Omitted: editorBracketPairGuide.activeBackground3
      // Omitted: editorBracketPairGuide.activeBackground4
      // Omitted: editorBracketPairGuide.activeBackground5
      // Omitted: editorBracketPairGuide.activeBackground6
      // Omitted: editorBracketPairGuide.background1
      // Omitted: editorBracketPairGuide.background2
      // Omitted: editorBracketPairGuide.background3
      // Omitted: editorBracketPairGuide.background4
      // Omitted: editorBracketPairGuide.background5
      // Omitted: editorBracketPairGuide.background6
      "editor.foldBackground": `${shade1}66`,
      // Omitted: editorOverviewRuler.background
      "editorOverviewRuler.border": shade1,
      "editorOverviewRuler.findMatchForeground": `${zYellow}bf`,
      "editorOverviewRuler.rangeHighlightForeground": `${shade2}bf`,
      "editorOverviewRuler.selectionHighlightForeground": `${shade1}bf`,
      "editorOverviewRuler.wordHighlightForeground": `${shade2}bf`,
      "editorOverviewRuler.wordHighlightStrongForeground": `${shade3}bf`,
      "editorOverviewRuler.modifiedForeground": `${zYellow}7f`,
      "editorOverviewRuler.addedForeground": `${zGreen}7f`,
      "editorOverviewRuler.deletedForeground": `${zRed}7f`,
      "editorOverviewRuler.errorForeground": `${zRed}7f`,
      "editorOverviewRuler.warningForeground": `${zOrange}7f`,
      "editorOverviewRuler.infoForeground": `${zBlueAlt}7f`,
      "editorOverviewRuler.bracketMatchForeground": shade3,
      "editorError.foreground": zRed,
      "editorError.border": shade7,
      // Omitted: editorError.background
      "editorWarning.foreground": zOrange,
      "editorWarning.border": shade6,
      // Omitted: editorWarning.background
      "editorInfo.foreground": zBlueAlt,
      "editorInfo.border": shade5,
      // Omitted: editorInfo.background
      "editorHint.foreground": zPink,
      "editorHint.border": shade4,
      "problemsErrorIcon.foreground": zRed,
      "problemsWarningIcon.foreground": zOrange,
      "problemsInfoIcon.foreground": zBlueAlt,
      // Omitted: editorUnnecessaryCode.border
      "editorUnnecessaryCode.opacity": "#0000007f",
      "editorGutter.background": shade0,
      "editorGutter.modifiedBackground": zYellow,
      "editorGutter.addedBackground": zGreen,
      "editorGutter.deletedBackground": zRed,
      "editorGutter.commentRangeForeground": shade3,
      "editorGutter.foldingControlForeground": shade5,
      // Omitted: editorCommentsWidget.resolvedBorder
      // Omitted: editorCommentsWidget.unresolvedBorder
      // Omitted: editorCommentsWidget.rangeBackground
      // Omitted: editorCommentsWidget.rangeBorder
      // Omitted: editorCommentsWidget.rangeActiveBackground
      // Omitted: editorCommentsWidget.rangeActiveBorder

      // Diff editor colors
      "diffEditor.insertedTextBackground": `${zGreen}20`,
      // Omitted: diffEditor.insertedTextBorder
      "diffEditor.removedTextBackground": `${zRed}20`,
      // Omitted: diffEditor.removedTextBorder
      "diffEditor.border": shade1,
      "diffEditor.diagonalFill": `${shade1}7f`,
      // Omitted: diffEditor.insertedLineBackground
      // Omitted: diffEditor.removedLineBackground
      // Omitted: diffEditorGutter.insertedLineBackground
      // Omitted: diffEditorGutter.removedLineBackground
      // Omitted: diffEditorOverview.insertedForeground
      // Omitted: diffEditorOverview.removedForeground

      // Editor widget colors
      "editorWidget.foreground": shade6,
      "editorWidget.background": shade1,
      "editorWidget.border": shade1,
      "editorWidget.resizeBorder": zBlueAlt,
      "editorSuggestWidget.background": shade1,
      "editorSuggestWidget.border": shade1,
      "editorSuggestWidget.foreground": shade6,
      // Omitted: "editorSuggestWidget.focusHighlightForeground"
      "editorSuggestWidget.highlightForeground": zPink,
      "editorSuggestWidget.selectedBackground": shade2,
      // Omitted: "editorSuggestWidget.selectedForeground"
      // Omitted: "editorSuggestWidget.selectedIconForeground"
      // Omitted: "editorSuggestWidgetStatus.foreground"
      "editorHoverWidget.foreground": shade6,
      "editorHoverWidget.background": shade1,
      "editorHoverWidget.border": shade1,
      // Omitted: "editorHoverWidget.highlightForeground"
      "editorHoverWidget.statusBarBackground": `${zBlueAlt}33`,
      // Omitted: "editorGhostText.border"
      // Omitted: "editorGhostText.background"
      // Omitted: "editorGhostText.foreground"
      // Omitted: "editorStickyScroll.background"
      // Omitted: "editorStickyScrollHover.background"
      "debugExceptionWidget.background": shade1,
      "debugExceptionWidget.border": shade1,
      "editorMarkerNavigation.background": shade1,
      "editorMarkerNavigationError.background": zRed,
      "editorMarkerNavigationWarning.background": zOrange,
      "editorMarkerNavigationInfo.background": zBlueAlt,
      // Omitted: "editorMarkerNavigationError.headerBackground"
      // Omitted: "editorMarkerNavigationWarning.headerBackground"
      // Omitted: "editorMarkerNavigationInfo.headerBackground"

      // Peek view colors
      "peekView.border": zPink,
      "peekViewEditor.background": `${shade1}7f`,
      "peekViewEditorGutter.background": `${shade1}7f`,
      "peekViewEditor.matchHighlightBackground": `${zYellow}7f`,
      // Omitted: peekViewEditor.matchHighlightBorder
      "peekViewResult.background": shade1,
      "peekViewResult.fileForeground": shade6,
      "peekViewResult.lineForeground": shade2,
      "peekViewResult.matchHighlightBackground": zYellow,
      "peekViewResult.selectionBackground": shade3,
      "peekViewResult.selectionForeground": shade7,
      "peekViewTitle.background": shade1,
      "peekViewTitleDescription.foreground": shade5,
      "peekViewTitleLabel.foreground": shade7,

      // Merge conflicts
      "merge.currentHeaderBackground": `${zCyan}4c`,
      "merge.currentContentBackground": `${zCyan}4c`,
      "merge.incomingHeaderBackground": `${zBlueAlt}4c`,
      "merge.incomingContentBackground": `${zBlueAlt}4c`,
      "merge.border": shade4,
      "merge.commonContentBackground": `${zPurpleAlt}4c`,
      "merge.commonHeaderBackground": `${zPurpleAlt}4c`,
      "editorOverviewRuler.currentContentForeground": zCyan,
      "editorOverviewRuler.incomingContentForeground": zBlueAlt,
      "editorOverviewRuler.commonContentForeground": zPurpleAlt,
      // Omitted: "mergeEditor.change.background"
      // Omitted: "mergeEditor.change.word.background"
      // Omitted: "mergeEditor.conflict.unhandledUnfocused.border"
      // Omitted: "mergeEditor.conflict.unhandledUnfocused.border"
      // Omitted: "mergeEditor.conflict.unhandledFocused.border"
      // Omitted: "mergeEditor.conflict.handledUnfocused.border"
      // Omitted: "mergeEditor.conflict.handledFocused.border"
      // Omitted: "mergeEditor.conflict.handled.minimapOverViewRuler"
      // Omitted: "mergeEditor.conflict.unhandled.minimapOverViewRuler"

      // Panel colors
      "panel.background": shade0,
      "panel.border": shade1,
      "panel.dropBorder": zBlueAlt,
      "panelTitle.activeBorder": shade3,
      "panelTitle.activeForeground": shade6,
      "panelTitle.inactiveForeground": shade4,
      // Omitted: panelInput.border
      "panelSection.border": shade1,
      "panelSection.dropBackground": `${shade1}3f`,
      "panelSectionHeader.background": shade2,
      "panelSectionHeader.foreground": shade6,
      "panelSectionHeader.border": shade0,

      // Preview colors
      // "imagePreview.border": shade1,

      // Status bar colors
      "statusBar.background": zBlue,
      "statusBar.foreground": shade7,
      "statusBar.border": shade0,
      "statusBar.debuggingBackground": zOrange,
      "statusBar.debuggingForeground": shade0,
      "statusBar.debuggingBorder": shade0,
      "statusBar.noFolderForeground": shade6,
      "statusBar.noFolderBackground": zPurple,
      "statusBar.noFolderBorder": shade0,
      "statusBarItem.activeBackground": zCyan,
      "statusBarItem.hoverBackground": zPurpleAlt,
      "statusBarItem.prominentBackground": zCyan,
      "statusBarItem.prominentHoverBackground": zGreen,
      "statusBarItem.remoteBackground": zGreen,
      "statusBarItem.remoteForeground": shade0,
      "statusBarItem.errorBackground": zRed,
      "statusBarItem.errorForeground": shade0,
      // Omitted: "statusBarItem.warningBackground"
      // Omitted: "statusBarItem.warningForeground"
      // Omitted: "statusBarItem.compactHoverBackground"
      // Omitted: "statusBarItem.focusBorder"
      // Omitted: "statusBarItem.settingsProfilesForeground"
      // Omitted: "statusBarItem.settingsProfilesBackground"
      // Omitted: "statusBar.focusBorder"

      // Title bar colors
      "titleBar.activeBackground": zBlue,
      "titleBar.activeForeground": shade7,
      "titleBar.inactiveBackground": shade0,
      "titleBar.inactiveForeground": shade3,
      // Omitted: titleBar.border

      // Menu bar colors
      "menubar.selectionForeground": shade7,
      "menubar.selectionBackground": shade1,
      // Omitted: menubar.selectionBorder
      "menu.foreground": shade6,
      "menu.background": shade0,
      "menu.selectionForeground": shade7,
      "menu.selectionBackground": shade1,
      // Omitted: menu.selectionBorder
      "menu.separatorBackground": shade2,
      // Omitted: menu.border

      // Command Center colors
      // Omitted: commandCenter.foreground
      // Omitted: commandCenter.activeForeground
      // Omitted: commandCenter.background
      // Omitted: commandCenter.activeBackground
      // Omitted: commandCenter.border

      // Notification colors
      // Omitted: notificationCenter.border
      "notificationCenterHeader.foreground": shade6,
      "notificationCenterHeader.background": shade2,
      "notificationToast.border": shade3,
      "notifications.foreground": shade7,
      "notifications.background": shade1,
      "notifications.border": shade3,
      "notificationLink.foreground": zBlueAlt,
      "notificationsErrorIcon.foreground": zRed,
      "notificationsWarningIcon.foreground": zOrange,
      "notificationsInfoIcon.foreground": zBlueAlt,

      // Banner colors
      // Omitted: banner.background
      // Omitted: banner.foreground
      // Omitted: banner.iconForeground

      // Extensions
      "extensionButton.prominentForeground": shade0,
      "extensionButton.prominentBackground": zBlueAlt,
      "extensionButton.prominentHoverBackground": zCyan,
      "extensionBadge.remoteBackground": zPink,
      "extensionBadge.remoteForeground": shade0,
      // Omitted: extensionIcon.starForeground
      // Omitted: extensionIcon.verifiedForeground
      // Omitted: extensionIcon.preReleaseForeground
      // Omitted: extensionIcon.sponsorForeground

      // Quick picker
      "pickerGroup.border": shade2,
      "pickerGroup.foreground": shade4,
      "quickInput.background": shade1,
      "quickInput.foreground": shade7,
      // Omitted: quickInputList.focusBackground
      // Omitted: quickInputList.focusForeground
      // Omitted: quickInputList.focusIconForeground
      "quickInputTitle.background": shade2,

      // Keybinding label colors
      // Omitted: keybindingLabel.background
      // Omitted: keybindingLabel.foreground
      // Omitted: keybindingLabel.border
      // Omitted: keybindingLabel.bottomBorder

      // Keyboard shortcut table colors
      // Omitted: keybindingTable.headerBackground
      // Omitted: keybindingTable.rowsBackground

      // Integrated terminal colors
      "terminal.background": shade0,
      // Omitted: terminal.border
      "terminal.foreground": shade6,
      "terminal.ansiBlack": shade0,
      "terminal.ansiBlue": zBlueAlt,
      "terminal.ansiBrightBlack": shade1,
      "terminal.ansiBrightBlue": zBlueAlt,
      "terminal.ansiBrightCyan": zCyan,
      "terminal.ansiBrightGreen": zCyan,
      "terminal.ansiBrightMagenta": zPink,
      "terminal.ansiBrightRed": zOrange,
      "terminal.ansiBrightWhite": shade7,
      "terminal.ansiBrightYellow": zYellow,
      "terminal.ansiCyan": zCyan,
      "terminal.ansiGreen": zGreen,
      "terminal.ansiMagenta": zPink,
      "terminal.ansiRed": zRed,
      "terminal.ansiWhite": shade6,
      "terminal.ansiYellow": zYellow,
      "terminal.selectionBackground": `${zBlueAlt}7f`,
      "terminalCursor.background": shade1,
      "terminalCursor.foreground": shade5,
      // Omitted: terminal.findMatchBackground
      // Omitted: terminal.findMatchBorder
      // Omitted: terminal.findMatchHighlightBackground
      // Omitted: terminal.findMatchHighlightBorder
      // Omitted: terminalCursor.background
      // Omitted: terminalCursor.foreground
      // Omitted: terminal.dropBackground
      // Omitted: terminal.tab.activeBorder
      // Omitted: terminalCommandDecoration.defaultBackground
      // Omitted: terminalCommandDecoration.successBackground
      // Omitted: terminalCommandDecoration.errorBackground
      // Omitted: terminalOverviewRuler.cursorForeground
      // Omitted: terminalOverviewRuler.findMatchForeground

      // Debug colors
      "debugToolBar.background": shade1,
      "debugToolBar.border": shade2,
      "editor.stackFrameHighlightBackground": `${zCyan}3f`,
      "editor.focusedStackFrameHighlightBackground": `${zGreen}3f`,
      // Omitted: editor.inlineValuesForeground
      // Omitted: editor.inlineValuesBackground
      "debugView.exceptionLabelForeground": zYellow,
      "debugView.exceptionLabelBackground": shade1,
      "debugView.stateLabelForeground": zBlueAlt,
      "debugView.stateLabelBackground": shade1,
      "debugView.valueChangedHighlight": `${zYellow}33`,
      "debugTokenExpression.name": zBlueAlt,
      "debugTokenExpression.value": shade7,
      "debugTokenExpression.string": zGreen,
      "debugTokenExpression.boolean": zPurpleAlt,
      "debugTokenExpression.number": zPink,
      "debugTokenExpression.error": zRed,

      // Testing view colors
      "testing.iconFailed": zOrange,
      "testing.iconErrored": zRed,
      "testing.iconPassed": zGreen,
      "testing.runAction": zBlueAlt,
      "testing.iconQueued": zCyan,
      "testing.iconUnset": shade5,
      "testing.iconSkipped": shade4,
      "testing.peekBorder": shade3,
      "testing.message.error.decorationForeground": zRed,
      "testing.message.error.lineBackground": `${zRed}3f`,
      // "testing.message.warning.decorationForeground": accent1,
      // "testing.message.warning.lineBackground": `${accent1}3f`,
      "testing.message.info.decorationForeground": zBlueAlt,
      "testing.message.info.lineBackground": `${zBlueAlt}3f`,
      // "testing.message.hint.decorationForeground": accent7,
      // "testing.message.hint.lineBackground": `${accent7}3f`,

      // Welcome page
      "welcomePage.background": shade0,
      // "welcomePage.buttonBackground": shade1,
      // "welcomePage.buttonHoverBackground": shade2,
      "welcomePage.progress.background": zBlueAlt,
      "welcomePage.progress.foreground": shade0,
      // Omitted: welcomePage.tileBackground
      // Omitted: welcomePage.tileHoverBackground
      // Omitted: welcomePage.tileShadow
      "walkThrough.embeddedEditorBackground": shade0,

      // Source control
      "scm.providerBorder": shade2,

      // Git
      "gitDecoration.addedResourceForeground": zGreen,
      "gitDecoration.modifiedResourceForeground": zYellow,
      "gitDecoration.deletedResourceForeground": zRed,
      // Omitted: "gitDecoration.renamedResourceForeground"
      "gitDecoration.stageModifiedResourceForeground": zCyan,
      "gitDecoration.stageDeletedResourceForeground": zRed,
      "gitDecoration.untrackedResourceForeground": zPurpleAlt,
      "gitDecoration.ignoredResourceForeground": shade3,
      "gitDecoration.conflictingResourceForeground": zCyan,
      "gitDecoration.submoduleResourceForeground": zPink,

      // Settings editor
      "settings.headerForeground": shade7,
      "settings.modifiedItemIndicator": zCyan,
      "settings.dropdownBackground": shade1,
      "settings.dropdownForeground": shade6,
      // Omitted: settings.dropdownBorder
      "settings.dropdownListBorder": shade2,
      "settings.checkboxBackground": zBlueAlt,
      "settings.checkboxForeground": shade0,
      "settings.checkboxBorder": zBlueAlt,
      "settings.rowHoverBackground": `${shade1}7f`,
      "settings.textInputBackground": shade1,
      "settings.textInputForeground": shade6,
      // Omitted: settings.textInputBorder
      "settings.numberInputBackground": shade1,
      "settings.numberInputForeground": shade6,
      // Omitted: settings.numberInputBorder
      "settings.focusedRowBackground": shade0,
      "notebook.focusedRowBorder": zPurpleAlt,
      // Omitted: settings.headerBorder
      // Omitted: settings.sashBorder

      // Breadcrumbs
      "breadcrumb.foreground": shade5,
      "breadcrumb.background": shade0,
      "breadcrumb.focusForeground": shade6,
      "breadcrumb.activeSelectionForeground": shade7,
      "breadcrumbPicker.background": shade0,

      // Snippets
      "editor.snippetTabstopHighlightBackground": `${shade1}7f`,
      // Omitted: editor.snippetTabstopHighlightBorder
      "editor.snippetFinalTabstopHighlightBackground": `${shade2}7f`,
      // Omitted: editor.snippetFinalTabstopHighlightBorder

      // Symbol icons
      "symbolIcon.arrayForeground": zPink,
      "symbolIcon.booleanForeground": zPurpleAlt,
      "symbolIcon.classForeground": zBlueAlt,
      "symbolIcon.colorForeground": zCyan,
      "symbolIcon.constantForeground": zGreen,
      "symbolIcon.constructorForeground": zPurpleAlt,
      "symbolIcon.enumeratorForeground": zCyan,
      "symbolIcon.enumeratorMemberForeground": zBlueAlt,
      "symbolIcon.eventForeground": zOrange,
      "symbolIcon.fieldForeground": zRed,
      "symbolIcon.fileForeground": shade6,
      "symbolIcon.folderForeground": shade5,
      "symbolIcon.functionForeground": zPurpleAlt,
      "symbolIcon.interfaceForeground": zRed,
      "symbolIcon.keyForeground": zYellow,
      "symbolIcon.keywordForeground": zBlueAlt,
      "symbolIcon.methodForeground": zCyan,
      "symbolIcon.moduleForeground": zCyan,
      "symbolIcon.namespaceForeground": zBlueAlt,
      "symbolIcon.nullForeground": zRed,
      "symbolIcon.numberForeground": zOrange,
      "symbolIcon.objectForeground": shade7,
      "symbolIcon.operatorForeground": zRed,
      "symbolIcon.packageForeground": zOrange,
      "symbolIcon.propertyForeground": zCyan,
      "symbolIcon.referenceForeground": zOrange,
      "symbolIcon.snippetForeground": shade5,
      "symbolIcon.stringForeground": zGreen,
      "symbolIcon.structForeground": zBlueAlt,
      "symbolIcon.textForeground": shade7,
      "symbolIcon.typeParameterForeground": zBlueAlt,
      "symbolIcon.unitForeground": zYellow,
      "symbolIcon.variableForeground": zOrange,

      // Debug icons
      "debugIcon.breakpointForeground": zRed,
      "debugIcon.breakpointDisabledForeground": shade4,
      "debugIcon.breakpointUnverifiedForeground": shade5,
      "debugIcon.breakpointCurrentStackframeForeground": zGreen,
      "debugIcon.breakpointStackframeForeground": zYellow,
      "debugIcon.startForeground": zGreen,
      "debugIcon.pauseForeground": zBlueAlt,
      "debugIcon.stopForeground": zRed,
      "debugIcon.disconnectForeground": zOrange,
      "debugIcon.restartForeground": zPink,
      "debugIcon.stepOverForeground": shade7,
      "debugIcon.stepIntoForeground": shade7,
      "debugIcon.stepOutForeground": shade7,
      "debugIcon.continueForeground": zGreen,
      "debugIcon.stepBackForeground": shade7,
      "debugConsole.infoForeground": zBlueAlt,
      "debugConsole.warningForeground": zOrange,
      "debugConsole.errorForeground": zRed,
      "debugConsole.sourceForeground": zPurpleAlt,
      "debugConsoleInputIcon.foreground": shade4,

      // Notebook
      // Omitted: notebook.editorBackground
      "notebook.cellBorderColor": `${shade1}3f`,
      "notebook.cellHoverBackground": `${shade1}3f`,
      "notebook.cellInsertionIndicator": zGreen,
      "notebook.cellStatusBarItemHoverBackground": `${shade1}3f`,
      "notebook.cellToolbarSeparator": `${shade1}3f`,
      // Omitted: notebook.cellEditorBackground
      "notebook.focusedCellBackground": `${shade1}7f`,
      "notebook.focusedCellBorder": zPurpleAlt,
      // "notebook.focusedCellShadow": "#0000003f",
      // "notebook.selectedCellBorder": shade4,
      "notebook.focusedEditorBorder": shade1,
      "notebook.inactiveFocusedCellBorder": shade5,
      // Omitted: notebook.inactiveSelectedCellBorder
      "notebook.outputContainerBackgroundColor": shade0,
      // Omitted: notebook.outputContainerBorderColor
      // Omitted: notebook.selectedCellBackground
      // Omitted: notebook.selectedCellBorder
      "notebook.symbolHighlightBackground": `${zPurpleAlt}3f`,
      "notebookScrollbarSlider.activeBackground": `${shade5}7f`,
      "notebookScrollbarSlider.background": `${shade3}7f`,
      "notebookScrollbarSlider.hoverBackground": `${shade4}7f`,
      "notebookStatusErrorIcon.foreground": zRed,
      "notebookStatusRunningIcon.foreground": zBlueAlt,
      "notebookStatusSuccessIcon.foreground": zGreen,

      // Chart colors
      "charts.foreground": shade6,
      "charts.lines": shade3,
      "charts.red": zRed,
      "charts.blue": zBlueAlt,
      "charts.yellow": zYellow,
      "charts.orange": zOrange,
      "charts.green": zGreen,
      "charts.purple": zPurpleAlt,

      // Ports colors
      // Omitted: ports.iconRunningProcessForeground
    },
    tokenColors: [
      {
        settings: {
          background: shade0,
          foreground: shade6,
          selectionBorder: shade5,
          findHighlight: zYellow,
          findHighlightForeground: shade0,
          activeGuide: zOrange,
          bracketsForeground: `${shade6}7F`,
          bracketsOptions: "stippled_underline",
          bracketsContentsForeground: `${shade6}7F`,
          tagsOptions: "stippled_underline",
        },
      },
      {
        name: "Comment",
        scope: "comment",
        settings: {
          foreground: shade3,
        },
      },
      {
        name: "Constant",
        scope: "constant",
        settings: {
          foreground: zPink,
        },
      },
      {
        name: "Entity",
        scope: "entity",
        settings: {
          foreground: zCyan,
        },
      },
      {
        name: "Invalid",
        scope: "invalid",
        settings: {
          foreground: zRed,
        },
      },
      {
        name: "Keyword",
        scope: "keyword, variable.language.this.ts",
        settings: {
          foreground: zPurpleAlt,
        },
      },
      {
        name: "Storage",
        scope: "storage",
        settings: {
          foreground: zPink,
        },
      },
      {
        name: "String",
        scope: "string",
        settings: {
          foreground: zGreen,
        },
      },
      {
        name: "Support",
        scope: "support",
        settings: {
          foreground: zCyan,
        },
      },
      {
        name: "Variable",
        scope: "variable",
        settings: {
          foreground: shade7,
        },
      },
      {
        name: "Markup Heading",
        scope: "markup.heading",
        settings: {
          foreground: zCyan,
        },
      },
      {
        name: "Markup Deleted",
        scope: "markup.deleted",
        settings: {
          foreground: zRed,
        },
      },
      {
        name: "Markup Inserted",
        scope: "markup.inserted",
        settings: {
          foreground: zGreen,
        },
      },
      {
        name: "Markup Changed",
        scope: "markup.changed",
        settings: {
          foreground: zYellow,
        },
      },
      {
        name: "Markup Underline",
        scope: "markup.underline",
        settings: {
          fontStyle: "underline",
        },
      },
      {
        name: "Markup Underline Link",
        scope: "markup.underline.link",
        settings: {
          foreground: zBlueAlt,
        },
      },
      {
        name: "Markup List",
        scope: "markup.list",
        settings: {
          foreground: shade7,
        },
      },
      {
        name: "Markup Raw",
        scope: "markup.raw",
        settings: {
          foreground: zPink,
        },
      },
    ],
  },
  null,
  2
);

fs.writeFileSync(path.join("themes", "zbra-dark.json"), json);
