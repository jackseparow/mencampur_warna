Blockly.defineBlocksWithJsonArray([
  {
    "type": "color_picker_custom",
    "message0": "warna %1 %2", // Menambah satu slot lagi untuk teks
    "args0": [
      { "type": "field_colour", "name": "COL", "colour": "#ff0000" },
      { "type": "field_label", "name": "LABEL", "text": "" } // Slot teks kosong
    ],
    "output": "Color",
    "colour": 230
  },
  {
    "type": "color_mixer",
    "message0": "campur %1 + %2",
    "args0": [
      { "type": "input_value", "name": "COLOR1", "check": "Color" },
      { "type": "input_value", "name": "COLOR2", "check": "Color" }
    ],
    "output": "Color",
    "colour": 160
  }
]);
