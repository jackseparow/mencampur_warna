javascript.javascriptGenerator.forBlock['color_picker_custom'] = function(block) {
  const color = block.getFieldValue('COL');
  return ["'" + color + "'", javascript.Order.ATOMIC];
};

javascript.javascriptGenerator.forBlock['color_mixer_ratio'] = function(block) {
  const color1 = javascript.javascriptGenerator.valueToCode(block, 'COLOR1', javascript.Order.ATOMIC) || "'#ffffff'";
  const ratio1 = block.getFieldValue('RATIO1');
  const color2 = javascript.javascriptGenerator.valueToCode(block, 'COLOR2', javascript.Order.ATOMIC) || "'#ffffff'";
  const ratio2 = block.getFieldValue('RATIO2');
  
  const code = `mixColorsRatio(${color1}, ${ratio1}, ${color2}, ${ratio2})`;
  return [code, javascript.Order.FUNCTION_CALL];
};

javascript.javascriptGenerator.forBlock['get_stored_color'] = function(block) {
  const id = block.getFieldValue('STORAGE_ID');
  const code = `getStorageColor(${id})`;
  return [code, javascript.Order.FUNCTION_CALL];
};
