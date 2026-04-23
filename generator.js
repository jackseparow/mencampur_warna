// Generator untuk blok pemilih warna
javascript.javascriptGenerator.forBlock['color_picker_custom'] = function(block) {
  const color = block.getFieldValue('COL');
  // Kita bungkus dengan tanda kutip agar dibaca sebagai string di JavaScript
  return ["'" + color + "'", javascript.Order.ATOMIC];
};

// Generator untuk blok pencampur
javascript.javascriptGenerator.forBlock['color_mixer'] = function(block) {
  const color1 = javascript.javascriptGenerator.valueToCode(block, 'COLOR1', javascript.Order.ATOMIC);
  const color2 = javascript.javascriptGenerator.valueToCode(block, 'COLOR2', javascript.Order.ATOMIC);
  
  // Menghasilkan pemanggilan fungsi mixColors('#warna1', '#warna2')
  const code = `mixColors(${color1 || "'#ffffff'"}, ${color2 || "'#ffffff'"})`;
  return [code, javascript.Order.FUNCTION_CALL];
};
