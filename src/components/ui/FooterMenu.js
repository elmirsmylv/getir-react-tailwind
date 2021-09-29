import React from "react";

const FooterMenu = ({ title, items }) => {
  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4">
        <h6 className="text-lg text-primary-brand-color">{title}</h6>
        <nav>
          <ul className="grid gap-y-1 md:gap-y-2">
            {items.length &&
              items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-brand-color">
                    {item.title}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </nav>
    </section>
  );
};

export default FooterMenu;
