// ==========================================================================
// Project:   WinCms
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals WinCms */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
WinCms = SC.Application.create(
  /** @scope WinCms.prototype */ {

  NAMESPACE: 'WinCms',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),
  
  // TODO: Add global constants or singleton objects needed by your app here.

  labelsAreBold: YES,
  
  labelBoldness: function() {
    var isBold = this.get('labelsAreBold') ;
    if (isBold) {
      return SC.BOLD_WEIGHT ;
    } else {
      return SC.REGULAR_WEIGHT ;
    }
  }.property('labelsAreBold').cacheable(),
  
  showStartMenu: function(target) {
    // using this example it creates the view once and reuses it
    WinCms.getPath('mainPage.startMenuPopup').popup(target) ;
    // using this example instead, it does the same as above but recreates the view objects each time
    // WinCms.mainPage.startMenuPopup.create().popup(target) ;
  },
  
  menuItemSelected: function(p1,p2) {
    console.log(p1.toString());
    console.log(p2.firstObject().toString());
    console.log(p2.firstObject().get("title"));
    console.log(p2.firstObject().get("menu_id"));
    console.log(p2.get("length"));
    
    p1.parentView.parentView.remove();
    // alert("Hello");
  }

}) ;
