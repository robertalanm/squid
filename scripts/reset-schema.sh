set -e
npx sqd codegen
npm run build
./scripts/reset-db.sh