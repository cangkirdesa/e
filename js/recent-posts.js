function showlatestposts(t){document.write('<ul id="recent-posts">');for(var e=0;e<15;e++){var r,s=t.feed.entry[e],i=s.title.$t;if(e==t.feed.entry.length)break;for(var a=0;a<s.link.length;a++)if("alternate"==s.link[a].rel){r=s.link[a].href;break}document.write('<li class="recent-posts">'),document.write('<a href="'+r+'" target ="_top" title="'+i+'">'+i+"</a>"),document.write("</li>")}document.write("</ul>")}document.write('<script type="text/javascript" src="/feeds/posts/default?orderby=published&amp;alt=json-in-script&amp;callback=showlatestposts"><\/script>');
