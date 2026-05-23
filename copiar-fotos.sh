#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# GLASSTEX — Script de copia de fotos reales
# Ejecutar desde Mac Terminal: bash copiar-fotos.sh
# ─────────────────────────────────────────────────────────────────────────────

FOTOS="$HOME/Desktop/GT/fotos GT"
DEST="$HOME/Documents/Claude/Projects/GT LANDING PAGE Y FUNNEL/glasstex-web/public"

echo "🔍 Verificando carpetas..."

if [ ! -d "$FOTOS" ]; then
  echo "❌ No se encontró: $FOTOS"
  exit 1
fi

if [ ! -d "$DEST" ]; then
  echo "❌ No se encontró: $DEST"
  exit 1
fi

echo "✅ Carpetas encontradas. Copiando fotos..."

# ─────────────────────────────────────────────────────────────────────────────
# FÁBRICA — para FacilityStrip (fabrica-4/5/6 son placeholders vacíos)
# ─────────────────────────────────────────────────────────────────────────────
FABRICA_SRC="$FOTOS/FABRICA "
FABRICA_DST="$DEST/fabrica"

copy_if_exists() {
  local src="$1"
  local dst="$2"
  local label="$3"
  if [ -f "$src" ]; then
    cp "$src" "$dst" && echo "  ✅ $label" || echo "  ⚠️  Error copiando $label"
  else
    echo "  ⏭️  No encontrado: $label"
  fi
}

echo ""
echo "📁 FÁBRICA (fotos extras para strip)..."
copy_if_exists "$FABRICA_SRC/1D6107DA-65D9-47D2-BDB6-072F27D6EB46.JPG"  "$FABRICA_DST/fabrica-4.jpg"   "fabrica-4.jpg"
copy_if_exists "$FABRICA_SRC/32C93DD4-4A40-41CB-A51E-9B8E683C51F4.JPG"  "$FABRICA_DST/fabrica-5.jpg"   "fabrica-5.jpg"
copy_if_exists "$FABRICA_SRC/466261D5-19A1-4E90-9F3D-FC9A964CDE80.JPG"  "$FABRICA_DST/fabrica-6.jpg"   "fabrica-6.jpg"

# ─────────────────────────────────────────────────────────────────────────────
# OBRAS — para ProjectsSection
# ─────────────────────────────────────────────────────────────────────────────
OBRAS_SRC="$FOTOS/OBRAS GT "
PROJECTS_DST="$DEST/projects"

echo ""
echo "📁 OBRAS GT (portfolio de proyectos)..."

# Torre Aviadores
copy_if_exists "$OBRAS_SRC/oo_02-00-torreaviadores000.jpg"   "$PROJECTS_DST/torre-aviadores.jpg"     "torre-aviadores.jpg"
copy_if_exists "$OBRAS_SRC/9D_02-03-torreaviadores02.jpg"    "$PROJECTS_DST/torre-aviadores-2.jpg"   "torre-aviadores-2.jpg"
copy_if_exists "$OBRAS_SRC/aviadores.jpeg"                   "$PROJECTS_DST/torre-aviadores-3.jpg"   "torre-aviadores-3.jpg"

# Banco Continental
copy_if_exists "$OBRAS_SRC/Banco-Continental-Edificio.png"   "$PROJECTS_DST/banco-continental.png"   "banco-continental.png"
copy_if_exists "$OBRAS_SRC/Fachada-Banco-scaled.jpg"         "$PROJECTS_DST/banco-continental-2.jpg" "banco-continental-2.jpg"

# Hotel Bourbon CONMEBOL
copy_if_exists "$OBRAS_SRC/bourbon-conmebol-assuncao.jpg"    "$PROJECTS_DST/hotel-bourbon.jpg"       "hotel-bourbon.jpg"
copy_if_exists "$OBRAS_SRC/hotel-bourbon-conmebol.jpg"       "$PROJECTS_DST/hotel-bourbon-2.jpg"     "hotel-bourbon-2.jpg"

# Sun Palace Tower
copy_if_exists "$OBRAS_SRC/Sun-Palace-Tower-Fachada-1-618x1030.png" "$PROJECTS_DST/sun-palace-tower.png" "sun-palace-tower.png"
copy_if_exists "$OBRAS_SRC/palace.jpg"                       "$PROJECTS_DST/home-palace-tower.jpg"   "home-palace-tower.jpg"

# ECOVI
copy_if_exists "$OBRAS_SRC/ECOVI.jpg"                        "$PROJECTS_DST/ecovi.jpg"              "ecovi.jpg"
copy_if_exists "$OBRAS_SRC/ECOVI1.jpg"                       "$PROJECTS_DST/ecovi-2.jpg"            "ecovi-2.jpg"
copy_if_exists "$OBRAS_SRC/ECOVI2.jpg"                       "$PROJECTS_DST/ecovi-3.jpg"            "ecovi-3.jpg"

# Holiday Inn
copy_if_exists "$OBRAS_SRC/th.outside800x600.3a51f02d3a5c624e3ecd8e07b819667a98f69133.webp" "$PROJECTS_DST/holiday-inn.webp" "holiday-inn.webp"

# Lynch Center
copy_if_exists "$OBRAS_SRC/LYNCHCENTER.jpg"                  "$PROJECTS_DST/lynch-center.jpg"       "lynch-center.jpg"

# Shopeste
copy_if_exists "$OBRAS_SRC/SHOPESTE.jpeg"                    "$PROJECTS_DST/shopeste.jpg"           "shopeste.jpg"

# HIT
copy_if_exists "$OBRAS_SRC/HIT.webp"                         "$PROJECTS_DST/hit.webp"               "hit.webp"
copy_if_exists "$OBRAS_SRC/HIT2.webp"                        "$PROJECTS_DST/hit-2.jpg"              "hit-2.jpg"

# INOVA
copy_if_exists "$OBRAS_SRC/INOVA.jpg"                        "$PROJECTS_DST/inova.jpg"              "inova.jpg"

# ATC
copy_if_exists "$OBRAS_SRC/ATC.jpeg"                         "$PROJECTS_DST/atc.jpg"               "atc.jpg"

# COP
copy_if_exists "$OBRAS_SRC/COP.webp"                         "$PROJECTS_DST/cop.webp"               "cop.webp"

# Automotor
copy_if_exists "$OBRAS_SRC/AUTOMOTOR1.jpeg"                  "$PROJECTS_DST/automotor.jpg"          "automotor.jpg"

# Itaipu
copy_if_exists "$FOTOS/2020-03-17-fachada-itaipu-sede-asuncion.jpeg" "$PROJECTS_DST/itaipu.jpg"    "itaipu.jpg"

# ─────────────────────────────────────────────────────────────────────────────
# INSTALACIONES — fotos adicionales de instalacion
# ─────────────────────────────────────────────────────────────────────────────
INST_SRC="$FOTOS/INSTALACIONES "

echo ""
echo "📁 INSTALACIONES (fotos adicionales)..."
copy_if_exists "$INST_SRC/IMG_0724.jpeg"  "$FABRICA_DST/instalacion-4.jpg"  "instalacion-4.jpg (extra)"

# ─────────────────────────────────────────────────────────────────────────────
echo ""
echo "✅ Copia completada."
echo ""
echo "Próximo paso — commit y push desde esta misma carpeta:"
echo ""
echo "  cd ~/Documents/Claude/Projects/GT\\ LANDING\\ PAGE\\ Y\\ FUNNEL/glasstex-web"
echo "  rm -f .git/HEAD.lock .git/index.lock"
echo "  git add -A"
echo "  git commit -m \"feat: fotos reales de obras, fábrica e instalaciones\""
echo "  git push origin main"
echo ""
