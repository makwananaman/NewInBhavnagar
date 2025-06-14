"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Store, MapPin, Phone, Star, Search } from "lucide-react";
import AnimatedElement from "@/app/components/AnimatedElement";
import Pagination from "@/app/components/Pagination";
import LoadingGrid from "@/app/components/LoadingGrid";
import ErrorDisplay from "@/app/components/ErrorDisplay";

interface Business {
  id: number;
  name: string;
  type: string;
  rating: number;
  reviews: number;
  address: string;
  phone: string;
  website: string;
  image: string;
  features: string[];
}

export default function BusinessesPage() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;

  const categories = ["All", "Restaurants", "Shopping", "Entertainment", "Services", "Healthcare"];

  const allBusinesses: Business[] = [
    {
      id: 1,
      name: "Spice Haven Restaurant",
      type: "Restaurants",
      rating: 4.5,
      reviews: 128,
      address: "123 Main Street, Bhavnagar",
      phone: "+91 1234567890",
      website: "www.spicehaven.com",
      image: "/images/spice-haven.jpg",
      features: ["Outdoor Seating", "Delivery", "Vegetarian Options"],
    },
    {
      id: 2,
      name: "Digital Hub Electronics",
      type: "Shopping",
      rating: 4.2,
      reviews: 89,
      address: "456 Tech Street, Bhavnagar",
      phone: "+91 9876543210",
      website: "www.digitalhub.com",
      image: "/images/digital-hub.jpg",
      features: ["Installation", "Repair", "Warranty"],
    },
  ];

  const filteredBusinesses = useMemo(() => {
    return allBusinesses.filter((business) => {
      const matchesSearch =
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFilter = filter === "all" || business.type.toLowerCase() === filter;
      return matchesSearch && matchesFilter;
    });
  }, [allBusinesses, searchQuery, filter]);

  const paginatedBusinesses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredBusinesses.slice(startIndex, endIndex);
  }, [filteredBusinesses, currentPage]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [filter, searchQuery, currentPage]);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredBusinesses.length / itemsPerPage));
    setCurrentPage(1);
  }, [filteredBusinesses]);

  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/blob.svg" className="w-full h-full object-cover" alt="bg" />
        </div>
        <AnimatedElement className="relative container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Discover Bhavnagar's Finest
          </motion.h1>
          <p className="text-xl text-primary-100">
            Explore local businesses, read reviews, and find the best deals
          </p>
        </AnimatedElement>
      </div>

      <div className="sticky top-0 z-30 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search businesses..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    filter === cat.toLowerCase()
                      ? "bg-primary-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-white"
                  }`}
                  onClick={() => setFilter(cat.toLowerCase())}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <LoadingGrid count={itemsPerPage} />
        ) : filteredBusinesses.length === 0 ? (
          <div className="text-center py-12 text-xl text-gray-600 dark:text-gray-400">
            <img src="/images/empty-box.svg" alt="No results" className="mx-auto w-32 mb-6 opacity-80" />
            No businesses found matching your criteria.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedBusinesses.map((business, index) => (
                <motion.div
                  key={business.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all"
                >
                  <div className="relative h-48">
                    <img
                      src={business.image}
                      alt={business.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {business.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{business.name}</h3>
                    <p className="text-primary-600 mb-4 flex items-center gap-2">
                      <Store className="w-4 h-4" />
                      {business.type}
                    </p>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {business.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {business.phone}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {business.features.map((feature, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-1 px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full text-xs font-medium"
                        >
                          🔹 {feature}
                        </motion.span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
