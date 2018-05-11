function lti_consumer_launch(id) {
  var form = jQuery('form#launch-' + id);

  if ( form.data('post') !== '' ) {
    jQuery.post(
      ajaxurl,
      {action: 'lti_launch', post: form.data('post')}
    );
   }
  form.submit(function () {
  window.location.href = "http://zendo.datasciencedojo.com/user-redirect/notebooks/Regression.ipynb"
  });
  
 }

jQuery(document).ready(function () {
  jQuery('form[data-auto-launch="yes"]').each(function () {
    lti_consumer_launch(jQuery(this).data('id'));
  });
});
