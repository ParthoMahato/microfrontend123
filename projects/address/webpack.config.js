const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "address",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        //library: { type: "module" },

        // For remotes (please adjust)
        name: "address",
        filename: "remoteEntry.js",
        exposes: {
            './AddressModule': './projects/address/src/app/address/address.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "shell": "http://localhost:4200/remoteEntry.js",
        //     "login": "http://localhost:5000/remoteEntry.js",
        //     "landing": "http://localhost:5001/remoteEntry.js",
        //     "mycart": "http://localhost:5002/remoteEntry.js",
        //     "orders": "http://localhost:5003/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@ngrx/effects": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
