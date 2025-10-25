# tsx → ts-node Migration Summary

## Problem Solved
Fixed the **"Cannot redefine property: File"** error that occurred when running the development server locally. This error was caused by a conflict between Vite's React Babel plugin and tsx both attempting to patch `globalThis.File`.

## Changes Made

### 1. Replaced tsx with ts-node in Development Script

**Before:**
```json
"dev": "NODE_ENV=development tsx server/index.ts"
```

**After:**
```json
"dev": "NODE_ENV=development node --loader ts-node/esm --experimental-specifier-resolution=node server/index.ts"
```

### 2. Added ts-node Dependency
- Installed `ts-node` as a devDependency
- Version: Latest stable release

### 3. Created tsconfig.server.json
Created a server-specific TypeScript configuration to properly resolve ESM imports:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "node",
    "allowImportingTsExtensions": false,
    "noEmit": false,
    "outDir": "./dist"
  },
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node"
  },
  "include": ["server/**/*", "shared/**/*"],
  "exclude": ["node_modules", "client"]
}
```

## Verification

✅ **No "Cannot redefine property: File" errors**  
✅ **Server starts successfully with ts-node**  
✅ **Vite HMR working correctly**  
✅ **All TypeScript imports resolve properly**  

## Running the Project

### Development
```bash
npm run dev
# Server will start on http://localhost:8000 (or PORT from .env)
```

### Production Build
```bash
npm run build
npm run start
```

## Why ts-node Instead of tsx?

While `tsx` is faster and more modern, it conflicts with Vite's React plugin when both try to polyfill browser APIs like `File` in the Node.js environment. Using `ts-node` with the ESM loader avoids this conflict while still providing full TypeScript support.

## Notes

- The `--experimental-specifier-resolution=node` flag allows importing TypeScript files without `.ts` extensions
- The `--loader ts-node/esm` flag enables ESM module support
- tsx remains in devDependencies but is not used in scripts
- This configuration works on Node.js 18+ and is compatible with all deployment platforms

---

**Status:** ✅ Migration complete and verified
