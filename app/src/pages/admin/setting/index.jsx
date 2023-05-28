import React from "react";
import AdminLayout from "../../../layouts/admin";
import SettingHeader from "../../../components/admin/orders/SettingHeader";

function Setting() {
  return (
    <AdminLayout>
      <SettingHeader />
      <div class="py-16">
        <div class="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
          <h2 class="mb-12 text-center text-2xl font-bold text-black md:text-4xl">
            Profile
          </h2>
          <div class="swiper mySwiper">
            <div class="swiper-wrapper pb-6">
              <div class="swiper-slide !bg-transparent">
                <div class="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12 text-gray-800">
                  <img
                    class="mx-auto !h-16 !w-16 rounded-full"
                    src="https://source.unsplash.com/100x100/?portrait?1"
                    alt="user avatar"
                    height="220"
                    width="220"
                    loading="lazy"
                  />
                  <p>
                    <span class="font-serif text-black">"</span> Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quaerat
                    repellat perspiciatis excepturi est. Non ipsum iusto aliquam
                    consequatur repellat provident, omnis ut, sapiente
                    voluptates veritatis cum deleniti repudiandae ad doloribus.{" "}
                    <span class="font-serif text-black">"</span>
                  </p>
                  <div>
                    <h6 class="text-lg font-semibold leading-none">
                      Yonatan Menkir
                    </h6>
                    <span class="text-xs text-gray-500">System Admin</span>
                  </div>
                </div>
              </div>

              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Setting;
