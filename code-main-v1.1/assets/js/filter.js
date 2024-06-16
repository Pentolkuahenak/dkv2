import $ from "jquery";

$(document).ready(function() {
    // Fungsi untuk memfilter item berdasarkan kelas
    $('#classSelect').on('change', function() {
      let selectedClass = $(this).val();
      if (selectedClass === 'all') {
        $('.item').show();
      } else {
        $('.item').hide();
        $('.' + selectedClass).show();
      }
    });
  });