javascript.javascriptGenerator.forBlock['color_picker_custom'] = function(block) {
  const color = block.getFieldValue('COL');
  return ["'" + color + "'", javascript.Order.ATOMIC];
};

javascript.javascriptGenerator.forBlock['color_mixer'] = function(block) {
  const color1 = javascript.javascriptGenerator.valueToCode(block, 'COLOR1', javascript.Order.ATOMIC);
  const color2 = javascript.javascriptGenerator.valueToCode(block, 'COLOR2', javascript.Order.ATOMIC);
  
  // Default ke putih jika salah satu kosong
  const val1 = color1 || "'#ffffff'";
  const val2 = color2 || "'#ffffff'";
  
  const code = `mixColors(${val1}, ${val2})`;
  return [code, javascript.Order.FUNCTION_CALL];
};
