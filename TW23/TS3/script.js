document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = this.value;
  
        switch (value) {
          case 'AC':
            display.value = '';
            break;
          case 'DE':
            display.value = display.value.toString().slice(0, -1);
            break;
          case '+/-':
            display.value = display.value.startsWith('-') ? display.value.substring(1) : '-' + display.value;
            break;
          case '=':
            try {
              display.value = eval(display.value);
            } catch (error) {
              display.value = 'Error';
            }
            break;
          default:
            display.value += value;
        }
      });
    });
  });