// Blok untuk memilih warna tunggal
Blockly.defineBlocksWithJsonArray([
  {
    "type": "color_picker_custom",
    "message0": "warna %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "COL",
        "colour": "#ff0000"
      }
    ],
    "output": "Color",
    "colour": 230,
    "tooltip": "Pilih warna dasar"
  },
  // Blok untuk mencampur dua warna
  {
    "type": "color_mixer",
    "message0": "campur %1 + %2",
    "args0": [
      { "type": "input_value", "name": "COLOR1", "check": "Color" },
      { "type": "input_value", "name": "COLOR2", "check": "Color" }
    ],
    "output": "Color",
    "colour": 160,
    "tooltip": "Gabungkan dua warna untuk melihat hasilnya"
  }
]);
