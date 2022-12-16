const colors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", 
    "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
    "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
    "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid",
    "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet",
    "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen",
    "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green",
    "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender",
    "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray",
    "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey",
    "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine",
    "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed",
    "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive",
    "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple",
    "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell",
    "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
    "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat",
    "White", "WhiteSmoke", "Yellow", "YellowGreen"
];
const hexCode = [
    "F0F8FF", "FAEBD7", "00FFFF", "7FFFD4", "F0FFFF", "F5F5DC", "FFE4C4", "000000",
    "FFEBCD", "0000FF", "8A2BE2", "A52A2A", "DEB887", "5F9EA0", "7FFF00", "D2691E",
    "FF7F50", "6495ED", "FFF8DC", "DC143C", "00FFFF", "00008B", "008B8B", "B8860B",
    "A9A9A9", "A9A9A9", "006400", "BDB76B", "8B008B", "556B2F", "FF8C00", "9932CC",
    "8B0000", "E9967A", "8FBC8F", "483D8B", "2F4F4F", "2F4F4F", "00CED1", "9400D3",
    "FF1493", "00BFFF", "696969", "696969", "1E90FF", "B22222", "FFFAF0", "228B22",
    "FF00FF", "DCDCDC", "F8F8FF", "FFD700", "DAA520", "808080", "808080", "008000",
    "ADFF2F", "F0FFF0", "FF69B4", "CD5C5C", "4B0082", "FFFFF0", "F0E68C", "E6E6FA",
    "FFF0F5", "7CFC00", "FFFACD", "ADD8E6", "F08080", "E0FFFF", "FAFAD2", "D3D3D3",
    "D3D3D3", "90EE90", "FFB6C1", "FFA07A", "20B2AA", "87CEFA", "778899", "778899",
    "B0C4DE", "FFFFE0", "00FF00", "32CD32", "FAF0E6", "FF00FF", "800000", "66CDAA",
    "0000CD", "BA55D3", "9370DB", "3CB371", "7B68EE", "00FA9A", "48D1CC", "C71585",
    "191970", "F5FFFA", "FFE4E1", "FFE4B5", "FFDEAD", "000080", "FDF5E6", "808000",
    "6B8E23", "FFA500", "FF4500", "DA70D6", "EEE8AA", "98FB98", "AFEEEE", "DB7093",
    "FFEFD5", "FFDAB9", "CD853F", "FFC0CB", "DDA0DD", "B0E0E6", "800080", "663399",
    "FF0000", "BC8F8F", "4169E1", "8B4513", "FA8072", "F4A460", "2E8B57", "FFF5EE",
    "A0522D", "C0C0C0", "87CEEB", "6A5ACD", "708090", "708090", "FFFAFA", "00FF7F",
    "4682B4", "D2B48C", "008080", "D8BFD8", "FF6347", "40E0D0", "EE82EE", "F5DEB3",
    "FFFFFF", "F5F5F5", "FFFF00", "9ACD32"
];
const lightTextColors = [
    "Black", "Blue", "BlueViolet", "Brown", "CadetBlue", "Chocolate", "CornflowerBlue", "Crimson",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGreen", "DarkMagenta", "DarkOliveGreen", "DarkOrchid", "DarkRed",
    "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray",
    "DimGrey", "DodgerBlue", "FireBrick", "ForestGreen", "Fucshia", "Gray", "Grey", "Green",
    "IndianRed", "Indigo", "LightSeaGreen", "LightSlateGray", "LightSlateGrey", "LimeGreen", "Magenta", "Maroon",
    "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumVioletRed", "MidnightBlue", "Navy",
    "Olive", "OliveDrab", "OrangeRed", "PaleVioletRed", "Peru", "Purple", "RebeccaPurple", "Red",
    "RoyalBlue", "SaddleBrown", "SeaGreen", "Sienna", "SlateBlue", "SlateGray", "SlateGrey", "SteelBlue",
    "Teal", "Tomato"
];

function addColors() {
    document.write("<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Colors</title></head>" +
    "<body id='body'>"
    );
    document.write("<div id='container'>");
    document.write("<h1 id='header'>CSS Colors</h1>");
    document.getElementById('header').style.textAlign = "center";
    document.write("<div id='wrapper'>");
    document.getElementById('wrapper').style.textAlign = "center";

    for (i = 0; i < colors.length; i++) {

        document.write("<div id='" + colors[i] + "'>");
        document.getElementById(colors[i]).style.backgroundColor = colors[i];
        document.getElementById(colors[i]).style.width="200px";
        document.getElementById(colors[i]).style.height="120px";
        document.getElementById(colors[i]).style.display="inline-block";
        document.getElementById(colors[i]).style.borderRadius="5%";
        document.getElementById(colors[i]).style.border="1px solid black";
        document.getElementById(colors[i]).style.margin="5px";
        document.getElementById(colors[i]).style.fontWeight="bold";
        document.getElementById(colors[i]).style.fontFamily="Arial, Helvetica, sans-serif";

        document.getElementById(colors[i]).onclick = function() {
            changeColor(this);
        }

        if ( lightTextColors.includes(colors[i])) {
            document.getElementById(colors[i]).style.color = "white";
        }

        document.write("<p>" + colors[i] + "</p>");
        document.write("<p>#"+ hexCode[i] + "</p>");

        document.write("<p id='check" + colors[i] + "'>Check</p>");
        document.getElementById('check' + colors[i]).style.color = hexCode[i]

        document.write("</div>");
    }
    document.write("</div></div>");
}

function changeColor(obj) {

    color = obj.style.backgroundColor;
    document.getElementById('body').style.backgroundColor = color;

    if (obj.style.color == "white") {
        document.getElementById('header').style.color = "white";
        changeBorder("white");
    }
    else {
        document.getElementById('header').style.color = "black";
        changeBorder("black");
    }
}

function changeBorder(color) {
    for (i = 0; i < colors.length; i++) {
        if (color == "black") {
            document.getElementById(colors[i]).style.borderColor = "black";
        }    
        else if (color == "white") {
            document.getElementById(colors[i]).style.borderColor = "white";
        }
    }
}