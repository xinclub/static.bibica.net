var WordPressZeroSpam = {
  init: function() {
    // Make sure the WordPress Zero Spam key is available.
    if ( typeof wpzerospam.key == "undefined" ) { return; }

    $form = jQuery( '.wpzerospam' );

    // If the form can't be found & should be, send a message to the console.
    if ( ! $form.length ) {
      console.log(
        'WordPress Zero Spam was unable to locate any custom forms (.wpzerospam)'
      );
      return true;
    }

    console.log(
      'WordPress Zero Spam located ' + $form.length + ' custom form(s) (.wpzerospam)'
    );

    $form.attr( 'data-wpzerospam', 'protected' );

    jQuery( '.wpzerospam' ).on( "submit", function() {
      if ( ! jQuery( '[name="wpzerospam_key"]', jQuery( this ) ).length ) {
        jQuery( "<input>" )
          .attr( "type", "hidden" )
          .attr( "name", "wpzerospam_key" )
          .attr( "value", wpzerospam.key )
          .appendTo( '.wpzerospam' );
      } else {
        jQuery( '[name="wpzerospam_key"]', jQuery( this ) ).value( wpzerospam.key );
      }

      return true;
    });
  }
};

// Will hold the enqueues integrations on request.
var WordPressZeroSpamIntegrations = {};

jQuery(function() {
  WordPressZeroSpam.init();
});
