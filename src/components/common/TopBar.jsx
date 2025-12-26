import { CONTACT_INFO } from "../../utils/constants";
import siteConfig from "../../config/siteConfig";

const TopBar = () => {
    return (
        <div className="bg-blue-900 text-white py-2 text-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-6">
                    <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                        <span>📞</span> {CONTACT_INFO.phone}
                    </a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                        <span>✉️</span> {CONTACT_INFO.email}
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    {Object.entries(siteConfig.social).map(([platform, url]) => (
                        <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-200 hover:text-white capitalize transition-colors"
                        >
                            {platform}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
