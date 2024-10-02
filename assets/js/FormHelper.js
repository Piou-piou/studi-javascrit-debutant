class FormHelper {
  static displayTooltip(element) {
    const tooltip = element.parentNode.querySelector('.tooltip');

    if (tooltip) {
      tooltip.classList.add('visible');
    }
  }

  static hideTooltip(element) {
    const tooltip = element.parentNode.querySelector('.tooltip');

    if (tooltip) {
      tooltip.classList.remove('visible');
    }
  }
}