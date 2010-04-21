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
    content: [
      SC.Object.create({
        title: "Home",
        menu_id: 1
      }),
      SC.Object.create({
        title: "About",
        menu_id: 2
      }),
      SC.Object.create({
        title: "Help"
      }),
      SC.Object.create({
        title: "Contact"
      }),
      SC.Object.create({
        title: "Products"
      })
    ],
    contentValueKey: 'title',
    actOnSelect: true,
    action: "menuItemSelected",
    target: WinCms
  })
  

});
