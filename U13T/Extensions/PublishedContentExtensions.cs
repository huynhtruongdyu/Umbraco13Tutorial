using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;

namespace U13T.Extensions
{
    public static class PublishedContentExtensions
    {
        public static HomePage? GetHomePage(this IPublishedContent content)
        {
            return content.AncestorOrSelf<HomePage>();
        }
        public static SiteSettings? GetSiteSettings(this IPublishedContent content)
        {
            var homePage = content.GetHomePage();
            if (homePage == null) return null;
            
            return homePage.FirstChild<SiteSettings>();
        }
    }
}
