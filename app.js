conset banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());

cost cloneBanner = banner.cloneNode(true);
console.log(clonedBanner);
