// ==========================================================================
// Project:   WinCms - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals WinCms */

// This page describes the main user interface for your application.  
WinCms.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView button1 button2 start'.w(),
    
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      fontWeightBinding: 'WinCms.labelBoldness', 
      // . notation mean relative to current location and owner is a special property on a view
      // this is an example of a binding not occuring in the action 
      isVisibleBinding: '.owner.button2.value',
      tagName: "h1", 
      value: "Welcome to SproutCore!"
    }),
    //  example where the binding is done in the button and uses a property in core.js
    button1: SC.ButtonView.design({
      layout: { right: 100, width: 200, height: 100},
      title: "Toggle Boldness",
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      valueBinding: 'WinCms.labelsAreBold'
    }),
    // Example where the binding is from the labelView
    button2: SC.ButtonView.design({
      layout: { left: 100, width: 200, height: 100},
      title: "Toggle Visiblity Text",
      buttonBehavior: SC.TOGGLE_BEHAVIOR,
      // default value is set and bindings will override this value
      value: YES
    }),

    start: SC.ButtonView.design({
      layout: { bottom: 0, left: 0, width: 200, height: 100},
      title: "Start",
      textAlign: SC.ALIGN_RIGHT,
      // ation is the name of the method in the core.js (in this example)... Also needs a target which is the object the method exists in
      action: 'showStartMenu',
      target: WinCms
    })
    
    // palette1: SC.PalettePane.design({
    //   layout: {left: 100, top: 200, witdh: 300, height: 300}
    // })
  }),
  
  startMenuPopup: SC.PickerPane.design({
    layout: {width: 100, height: 100},
    contentView: WinCms.StartMenuView
  })

});
