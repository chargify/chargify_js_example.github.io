
const chargify = new Chargify();

chargify.load({

  // selector where the iframe will be included in the host's HTML (i.e. '#chargify-form')
  // optional if you have a `selector` on each and every field
  selector: '#chargify-form',

  // (i.e. '1a2cdsdn3lkn54lnlkn')
  publicKey: 'MY_PUBLIC_KEY',

  // form type (possible values: 'card' or 'bank')
  type: 'bank',

  // points to your Chargify site
  serverHost: 'https://acme.chargify.test',

});