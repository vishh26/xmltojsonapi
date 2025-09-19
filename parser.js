//  XML to JSON parser handling attributes, nested elements, entities, self-closing tagNames

function decodeEntity(str) 
{
    return str
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'");
}

function parseAttributes(str) 
{
    const attribute = {};
    const regex = /(\w+)="([^"]*)"/g;
    let match;
    while ((match = regex.exec(str))) 
    {
        attribute[`_${match[1]}`] = decodeEntity(match[2]);
    }
    return attribute;
}

function parseXML(xml) 
{
    xml = xml.replace(/<\?xml.*?\?>/, "");
    xml = xml.replace(/<!--.*?-->/gs, "");

    function parseNode(xmlStr) 
    {
        const tagNameRegex = /<([a-zA-Z0-9_:-]+)([^>]*)>(.*?)<\/\1>|<([a-zA-Z0-9_:-]+)([^>]*)\/>/gs;
        let obj = {};
        let match;

        while ((match = tagNameRegex.exec(xmlStr))) 
        {
            if (match[1]) 
            {
                const tagName = match[1];
                const attribute = parseAttributes(match[2]);
                const innerContent = match[3].trim();
                let child = parseNode(innerContent);
                let value;

                if (Object.keys(child).length > 0) 
                {
                    value = { ...attribute, ...child };
                }
                else 
                {
                    value = Object.keys(attribute).length ? { ...attribute, [tagName]: decodeEntity(innerContent) } : decodeEntity(innerContent);
                }

                if (obj[tagName]) 
                {
                    if (!Array.isArray(obj[tagName])) 
                    {
                        obj[tagName] = [obj[tagName]];
                    }
                    obj[tagName].push(value);
                } 
                else 
                {
                    obj[tagName] = value;
                }
            } 
            else if (match[4]) 
            {
                const tagName = match[4];
                const attribute = parseAttributes(match[5]);
                obj[tagName] = { ...attribute };
            }
        }
        return obj;
    }

    return parseNode(xml);
}

module.exports = parseXML;
