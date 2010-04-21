// ==========================================================================
// Project:   WinCms.StartMenuView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals WinCms */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
WinCms.StartMenuView = SC.View.design(
/** @scope WinCms.StartMenuView.prototype */ {
  // layout: {width: 100, height: 100},

  childViews: "programsList".w(),
  
  programsList: SC.ListView.extend({
    content: ["Home", "About"]
  })
  

});
