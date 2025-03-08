import Wrapper from "@/components/custom/wrapper";
import HeaderContent from "./main.header";
import HeroPhrase from "./components/hero-phrase";
import TrustedPhrase from "./components/trusted-phrase";
import Services from "./components/services";

export default async function page() {

    return (
        <Wrapper
            className="py-16 lg:gap-16 gap-8 px-4 lg:px-0"
            sidebarHidden
            headerContent={<HeaderContent />}>
            <HeroPhrase />
            <TrustedPhrase />
            <Services />
        </Wrapper>
    );
}