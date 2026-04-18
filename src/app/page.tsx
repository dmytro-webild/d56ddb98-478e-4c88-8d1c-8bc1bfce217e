"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Featured",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="StepUp"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "sparkles-gradient",
      }}
      title="Step Into Style"
      description="Premium brand shoes collection for every stride. Experience comfort and performance redefined."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/gym-composition-with-sport-elements_23-2147915644.jpg",
          imageAlt: "StepUp collection display",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-futuristic-sneakers-showcase_23-2151005700.jpg",
          imageAlt: "StepUp collection display",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/runner-man-s-feet-running-road-closeup-shoe_273609-14245.jpg",
          imageAlt: "StepUp collection display",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/cowboy-inspiration-with-accessories-cactus_23-2149484765.jpg",
          imageAlt: "StepUp collection display",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/gym-composition-with-sport-elements_23-2147915643.jpg",
          imageAlt: "StepUp collection display",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/food-dessert-representative-elements_23-2149177085.jpg",
          imageAlt: "StepUp collection display",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "StepUp",
          name: "Classic Runner",
          price: "₹2,999",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/men-shoes_1203-8658.jpg",
        },
        {
          id: "2",
          brand: "StepUp",
          name: "Urban Sneakers",
          price: "₹2,499",
          rating: 4,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/teenagers-sitting-together_23-2148105658.jpg",
        },
        {
          id: "3",
          brand: "StepUp",
          name: "Pro Sports",
          price: "₹3,499",
          rating: 5,
          reviewCount: "200",
          imageSrc: "http://img.b2bpic.net/free-photo/sneakers_1122-2301.jpg",
        },
        {
          id: "4",
          brand: "StepUp",
          name: "Elite Training",
          price: "₹4,299",
          rating: 5,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/female-skateboard-talking-phone_23-2148436063.jpg",
        },
        {
          id: "5",
          brand: "StepUp",
          name: "Active Motion",
          price: "₹3,199",
          rating: 4,
          reviewCount: "70",
          imageSrc: "http://img.b2bpic.net/free-photo/adult-man-making-cardio-training-exercises-gym-club-closeup-horizontal_1220-1705.jpg",
        },
        {
          id: "6",
          brand: "StepUp",
          name: "Everyday Canvas",
          price: "₹1,999",
          rating: 4,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-composition-toys-frame-template_23-2148144821.jpg",
        },
      ]}
      title="Featured Collection"
      description="Explore our handpicked selection of premium footwear."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          label: "Performance",
          title: "Engineered Comfort",
          items: [
            "Lightweight soles",
            "Breathable material",
            "Ergonomic arch support",
          ],
        },
        {
          id: "f2",
          label: "Quality",
          title: "Durable Materials",
          items: [
            "Premium leather finish",
            "Recycled polyester mesh",
            "Reinforced stitching",
          ],
        },
        {
          id: "f3",
          label: "Service",
          title: "Seamless Shopping",
          items: [
            "Fast home delivery",
            "Easy return policy",
            "Customer support 24/7",
          ],
        },
      ]}
      title="Why Choose Us"
      description="Excellence in every pair, designed for your lifestyle."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Best purchase",
          quote: "Incredible comfort for my daily runs. Highly recommended!",
          name: "Alex J.",
          role: "Runner",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-girl-with-tablet-sitting-floor_23-2148264106.jpg",
        },
        {
          id: "t2",
          title: "Very stylish",
          quote: "The casual sneakers look amazing with everything I wear.",
          name: "Mia S.",
          role: "Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-s-legs-with-stylish-high-heels-pantyhose_23-2150166099.jpg",
        },
        {
          id: "t3",
          title: "Perfect fit",
          quote: "Found the perfect size, and they feel like walking on clouds.",
          name: "Liam T.",
          role: "Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-sitting-plastic-orange-penny-shortboard-asphalt-cap_158538-13654.jpg",
        },
        {
          id: "t4",
          title: "Top quality",
          quote: "Well-made, durable, and super light on the feet.",
          name: "Sarah K.",
          role: "Athlete",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiling-brunette-female-wearing-blue-casual-t-shirt-holding-skateboard-hands-posing-isolated-yellow-wall-outdoor-expressing-positive-emotions_176532-14841.jpg",
        },
        {
          id: "t5",
          title: "Value for money",
          quote: "Great performance shoes without the massive price tag.",
          name: "David W.",
          role: "Gym Goer",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-guy-dressed-black-jacket-jeans-using-smartphone-sitting-steps-against-old-building-europe_613910-4512.jpg",
        },
      ]}
      title="Customer Reviews"
      description="Real stories from our happy community of shoe enthusiasts."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What is the return policy?",
          content: "You can return your shoes within 30 days of purchase.",
        },
        {
          id: "q2",
          title: "Do you offer international shipping?",
          content: "Currently, we ship within India exclusively.",
        },
        {
          id: "q3",
          title: "How do I choose my size?",
          content: "Check our size guide available on each product page.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/assisting-needy-with-food-aid_482257-80503.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about our products and shipping."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "10k+",
          title: "Pairs Sold",
          items: [
            "Trusted by thousands",
          ],
        },
        {
          id: "m2",
          value: "50+",
          title: "New Styles",
          items: [
            "Innovation yearly",
          ],
        },
        {
          id: "m3",
          value: "4.8/5",
          title: "Avg. Rating",
          items: [
            "Customer satisfaction",
          ],
        },
      ]}
      title="Our Impact"
      description="Growing strong with the support of our customers."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Fashion Daily",
        "Urban Style",
        "Sport Central",
        "Running Today",
        "Footwear Insights",
        "Daily Trends",
        "Active Life",
      ]}
      title="Partners & Features"
      description="Recognized by industry leaders."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get In Touch"
      description="Have questions? Fill out the form, and our support team will reach out."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/businesswoman-analyzing-financial-growth-report-typing-company-strategy-computer-keyboard-executive-manager-working-late-night-marketing-project-startup-office-close-up_482257-74982.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="StepUp"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Running",
              href: "#products",
            },
            {
              label: "Casual",
              href: "#products",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2026 StepUp Shoes | All Rights Reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
