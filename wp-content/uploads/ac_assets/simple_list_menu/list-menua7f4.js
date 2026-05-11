function listMenu(){
  
  //classes
  
  
  //selectors
  
  
  //objects
  var g_objWidget, g_objMenuItemLinks;
  
  //custom attrs
  
  
  //helpers
  var g_widgetId, g_showIcon, g_menuItemIconHTML;
  
  /**
  * add icons
  */
  function addIcons(){
    if(!g_objMenuItemLinks || g_objMenuItemLinks.length == 0)
    return(false);
  
    if(g_showIcon == 'false')
      return(false);

    g_objMenuItemLinks.each(function(){
      var objLink = jQuery(this);

      objLink.prepend(g_menuItemIconHTML);
    });
  }
  
  
  /**
  * init from external file
  */
  this.init = function(options){
    
    //init vars
    //classes
    
    
    //selectors
    
    //helpers
    g_widgetId = options.widgetsOptions.uc_id;
    g_menuItemIconHTML = options.widgetsOptions.menu_item_icon_html;
    g_showIcon = options.widgetsOptions.show_icon;
    
    //objects
    g_objWidget = jQuery('#'+g_widgetId);
    g_objMenuItemLinks = g_objWidget.find('.menu-item a');
    //custom attrs
    
    
    addIcons();
    //init events
  }
  
}