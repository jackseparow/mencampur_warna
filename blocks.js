Blockly.defineBlocksWithJsonArray([
  {
    "type": "color_picker_custom",
    "message0": "%1 %2",
    "args0": [
      { "type": "field_colour", "name": "COL", "colour": "#ff0000" },
      { "type": "field_label", "name": "LABEL", "text": "MERAH" }
    ],
    "output": "Color",
    "colour": "#ff0000",
    "extensions": ["update_block_color"]
  },
  {
    "type": "color_mixer_ratio",
    "message0": "campur %1 %2 bagian + %3 %4 bagian",
    "args0": [
      { "type": "input_value", "name": "COLOR1", "check": "Color" },
      { "type": "field_number", "name": "RATIO1", "value": 1, "min": 1 },
      { "type": "input_value", "name": "COLOR2", "check": "Color" },
      { "type": "field_number", "name": "RATIO2", "value": 1, "min": 1 }
    ],
    "output": "Color",
    "colour": 160
  },
  {
    "type": "get_stored_color",
    "message0": "ambil dari rak: %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "STORAGE_ID",
        "options": [ ["Botol 1", "0"], ["Botol 2", "1"], ["Botol 3", "2"] ]
      }
    ],
    "output": "Color",
    "colour": 45
  }
]);

// Fungsi pengubah warna blok otomatis
Blockly.Extensions.register('update_block_color', function() {
  this.setOnChange(function() {
    const color = this.getFieldValue('COL');
    this.setColour(color);
  });
});
