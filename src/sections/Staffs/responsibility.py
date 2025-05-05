import json
input_text = """
Membuat perancangan SOP desain.
Menjalankan dan mengkoordinasikan publikasi secara fisik dan lewat sosial media. 
Melakukan penuansaan hari-hari besar pendidikan dan sosial.
Bertanggung jawab atas pengembangan website.
Mengelola semua sosial media TIS FTUI.
Mengadakan pelatihan desain.
"""

lines = [line.strip() for line in input_text.strip().split('\n') if line.strip()]

responsibility_dict = {
    "responsibility": {
        str(i+1): line for i, line in enumerate(lines)
    }
}

print(json.dumps(responsibility_dict, ensure_ascii=False, indent=4))
